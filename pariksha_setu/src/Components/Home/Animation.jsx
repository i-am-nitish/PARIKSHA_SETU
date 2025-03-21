import { AnimatedBeamDemo } from "@/components/easyui/animated-beam";

const CustomIcons = {
    image1: () => <Image src="https://www.svgrepo.com/show/303201/facebook-like-logo.svg" alt="1Password" width={24} height={24} />,
    image2: () => <Image src="https://www.svgrepo.com/show/306500/openai.svg" alt="ActiveCampaign" width={30} height={30} />,
    image3: () => <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="React Logo" width={24} height={24} />,
    image4: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" width={24} height={24} />,
    image5: () => <Image src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Netflix" width="24" height="24" />,
    image6: () => <Image src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg" alt="Robinhood" width={34} height={34} />,
    image7: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width={24} height={24} />,
};

export default function Home() {
   <AnimatedBeamDemo
        icons={CustomIcons}
        beamColor="#ff4040"
        beamSpeed={100}
        className="custom-class"
    />
}