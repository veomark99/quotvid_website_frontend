/**
 * Simple Icons brand marks (same sources as the app dashboard).
 * @see https://simpleicons.org/
 */
import type { ComponentType } from 'react';
import {
  SiFacebook,
  SiInstagram,
  SiPinterest,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';

const BRAND_COLOR: Record<string, string> = {
  youtube: '#FF0000',
  instagram: '#E4405F',
  tiktok: '#000000',
  pinterest: '#BD081C',
  facebook: '#0866FF',
};

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  color?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}>;

export function SocialPlatformIcon({
  platform,
  size = 28,
  className = '',
}: {
  platform: string;
  size?: number;
  className?: string;
}) {
  const p = platform.toLowerCase();
  const color = BRAND_COLOR[p];
  const cls = `shrink-0 ${className}`.trim();

  function renderIcon(Icon: IconComponent) {
    return <Icon size={size} className={cls} color={color} aria-hidden />;
  }

  switch (p) {
    case 'youtube':
      return renderIcon(SiYoutube);
    case 'instagram':
      return renderIcon(SiInstagram);
    case 'tiktok':
      return renderIcon(SiTiktok);
    case 'pinterest':
      return renderIcon(SiPinterest);
    case 'facebook':
      return renderIcon(SiFacebook);
    default:
      return (
        <span
          className={`inline-flex items-center justify-center rounded-md bg-muted text-xs font-semibold ${className}`}
          style={{ width: size, height: size }}
          aria-hidden
        >
          {p.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}
