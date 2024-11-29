"use client"
import { Button } from "../ui/button";

const ContactButton = () => {
    const handleContactClick = () => {
        window.open('https://wa.me/971585412986', '_blank');
    };

    return (
        <Button onClick={handleContactClick}>
            Contact
        </Button>
    );
};

export default ContactButton;