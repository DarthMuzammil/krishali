"use client"
import { sendGAEvent } from '@next/third-parties/google'
import { Button } from "../ui/button";

const ContactButton = () => {
    const handleContactClick = () => {
        sendGAEvent('event', 'buttonClicked', { value: 'custom_event' })
        window.open('https://wa.me/971503714039', 'Hello, I am interested in your services and would like to know the latest pricing.');
    };

    return (
        <Button className="w-full" onClick={handleContactClick}>
            Contact
        </Button>
    );
};

export default ContactButton;