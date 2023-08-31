export interface VideoDetails {
  views: number;
  timePass: string;
}
export default interface VideoItemProps {
  title: string;
  thumbnailUrl: string;
  channelLogoUrl: string;
  channel: string;
  description: string;
  details: VideoDetails;
}
