import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const shareButtons = [
    {
      Button: TwitterShareButton,
      Icon: TwitterIcon,
      label: 'Twitter',
    },
    {
      Button: FacebookShareButton,
      Icon: FacebookIcon,
      label: 'Facebook',
    },
    {
      Button: WhatsappShareButton,
      Icon: WhatsappIcon,
      label: 'WhatsApp',
    },
    {
      Button: TelegramShareButton,
      Icon: TelegramIcon,
      label: 'Telegram',
    },
  ];

  return (
    <div className="flex space-x-2">
      {shareButtons.map(({ Button, Icon, label }) => (
        <Button
          key={label}
          url={url}
          title={title}
          className="hover:opacity-80 transition-opacity"
        >
          <Icon size={32} round />
        </Button>
      ))}
    </div>
  );
}