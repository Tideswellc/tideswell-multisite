import soccer from '../site-config/soccerdealsdaily.json';
import tech from '../site-config/techsaverdaily.json';
import { SiteConfig } from '@tideswell/shared';

const map: Record<string, SiteConfig> = {
  [soccer.key]: soccer as SiteConfig,
  [tech.key]: tech as SiteConfig,
};

export default map;
