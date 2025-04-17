"use client";

import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { GripVertical, Plus, Trash2 } from "lucide-react";

interface Link {
  id: string;
  label: string;
  url: string;
  icon?: string;
  order: number;
}

function SortableLink({ link }: { link: Link }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4"
    >
      <button
        className="cursor-grab text-gray-400 hover:text-white"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-5 w-5" />
      </button>
      <div className="flex-1">
        <Input
          value={link.label}
          onChange={(e) => {
          }}
          className="mb-2 bg-gray-800 border-gray-700 text-white"
        />
        <Input
          value={link.url}
          onChange={(e) => {
          }}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <button
        onClick={() => {
        }}
        className="text-gray-400 hover:text-red-400"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function LinksPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch("/api/user/links");
      if (!response.ok) throw new Error("Failed to fetch links");
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      toast.error("Failed to load links");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLinks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        newItems.forEach(async (item, index) => {
          try {
            await fetch("/api/user/links", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...item,
                order: index,
              }),
            });
          } catch (error) {
            toast.error("Failed to update link order");
          }
        });

        return newItems;
      });
    }
  };

  const addLink = async () => {
    try {
      const response = await fetch("/api/user/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: "New Link",
          url: "https://",
          order: links.length,
        }),
      });

      if (!response.ok) throw new Error("Failed to add link");
      const newLink = await response.json();
      setLinks([...links, newLink]);
      toast.success("Link added successfully");
    } catch (error) {
      toast.error("Failed to add link");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Links</h1>
        <Button onClick={addLink} className="bg-indigo-600 hover:bg-indigo-500">
          <Plus className="mr-2 h-4 w-4" />
          Add Link
        </Button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={links} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {links.map((link) => (
              <SortableLink key={link.id} link={link} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
} 