"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, Loader } from "lucide-react";
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

        <div className="bg max-w-xl mx-auto py-2">
          <a target="_blank" href="https://www.linkedin.com/in/ravi-kr-sharma-1122a3299/" className="pl-2 pr-3 sm:px-3 inline-block">
            <LinkedinIcon strokeWidth={1.3} className="w-8 h-8 hover:text-emerald-500" />
          </a>
          <a target="_blank" href="https://github.com/Ravikumarsharma07/" className="pl-2 pr-4 sm:px-4 inline-block">
            <GithubIcon strokeWidth={1.3} className="w-8 h-8 hover:text-emerald-500" />
          </a>
        </div>
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
