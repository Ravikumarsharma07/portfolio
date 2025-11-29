"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, Loader, MailIcon, PhoneCallIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const {toast} = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if(response.status === 200) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast({
          title: "Success",
          description: "Message sent successfully",
          variant: "default"
        });
      }else{
        console.log(response);
        toast({
          title: "Error occured",
          description: "Message not sent",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error occured",
        description: "Message not sent",
        variant: "destructive"
      });
    }finally{
      setIsSubmitted(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-tr from-purple-700/40 via-pink-500/10 to-blue-900/30"
    >
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-5 w-max place-self-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>


        <div className="flex gap-2 items-start md:items-center flex-col py-10 sm:py-6 font-serif text-lg">
          <a href="tel:+918920878094" className="flex-center gap-2 hover:text-emerald-600">
            <PhoneCallIcon />+91 8920878094
          </a>
          <a href="mailto:ravikrsharma207@gmail.com" className="flex-center gap-2 hover:text-emerald-600">
            <MailIcon />ravikrsharma207@gmail.com
          </a>
        </div>
        
        {/* social profile links, github and linkedin  */}
        <div className="bg max-w-xl mx-auto py-2 flex gap-2 sm:gap-3 pl-1">
          <a target="_blank" href="https://www.linkedin.com/in/ravi-kr-sharma-1122a3299/">
            <LinkedinIcon strokeWidth={1.3} className="w-8 h-8 hover:text-emerald-500" />
          </a>
          <a target="_blank" href="https://github.com/Ravikumarsharma07/">
            <GithubIcon strokeWidth={1.3} className="w-8 h-8 hover:text-emerald-500" />
          </a>
          <a target="_blank" href="https://wa.me/918920878094" className="text-emerald-500 fill-white hover:fill-emerald-600">
            {/* <GithubIcon strokeWidth={1.3} className="w-8 h-8 hover:text-emerald-500" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/></svg>
          </a>
        </div>

        {/* form to send mail  */}
        <Card className="max-w-xl mx-auto bg-transparent border-[#919191]">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  className="bg-transparent outline-none border-purple-300 dark:border-[#4b4b4b]"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  className="bg-transparent outline-none border-purple-300 dark:border-[#4b4b4b]"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  >
                  Message
                </label>
                <Textarea
                  className="bg-transparent outline-none border-purple-300 dark:border-[#4b4b4b]"
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitted}
                className={`w-full ${isSubmitted ? "opacity-50" : ""} dark:bg-white bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-primary-foreground px-6 py-3 rounded-lg transition-opacity`}
              >
                {isSubmitted ? <Loader className="animate-spin" /> : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
      </div>
    </section>
  );
};

export default ContactSection;
