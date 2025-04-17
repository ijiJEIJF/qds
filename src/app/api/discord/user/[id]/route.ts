import { NextResponse } from 'next/server';

const API_ENDPOINT = "https://discord.com/api/v10";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  console.log('Fetching Discord user:', userId);

  try {
    if (!process.env.DISCORD_BOT_TOKEN) {
      console.error('Bot token not configured');
      throw new Error('Bot token not configured');
    }

    const headers = {
      'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    };

    console.log('Making request to Discord API...');
    const userResponse = await fetch(`${API_ENDPOINT}/users/${userId}`, { headers });
    
    if (!userResponse.ok) {
      const errorData = await userResponse.json().catch(() => null);
      console.error('Discord API error:', {
        status: userResponse.status,
        statusText: userResponse.statusText,
        error: errorData
      });
      throw new Error(`Discord API error: ${userResponse.status} ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();
    console.log('Successfully fetched user data');

    return NextResponse.json({
      success: true,
      data: {
        id: userData.id,
        username: userData.username,
        discriminator: userData.discriminator,
        avatar: userData.avatar,
        global_name: userData.global_name,
        avatar_url: userData.avatar 
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.${userData.avatar.startsWith('a_') ? 'gif' : 'png'}`
          : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`,
        banner_url: userData.banner 
          ? `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}.${userData.banner.startsWith('a_') ? 'gif' : 'png'}`
          : null
      }
    });
  } catch (error) {
    console.error('Error in Discord API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch Discord data'
      },
      { status: 500 }
    );
  }
} 