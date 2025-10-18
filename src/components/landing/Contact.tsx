"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters."
  }),
});

export const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
        title: "Transmission Received",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default"
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-screen-md relative">
        <div className="absolute -top-8 left-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
            05
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            For collaborations, business inquiries, or just to say hi.
          </p>
        </div>
        <Card className="bg-background/50 border-2 border-border clip-path-polygon">
            <CardContent className="p-8 md:p-10">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-mono text-sm uppercase tracking-wider">Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Callsign" {...field} className="font-mono"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-mono text-sm uppercase tracking-wider">Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="your@comms.link" {...field} className="font-mono"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-mono text-sm uppercase tracking-wider">Message</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Your transmission..."
                            className="min-h-[150px] font-mono"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex justify-center pt-4">
                        <Button type="submit" size="lg" className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow duration-300 clip-path-polygon group w-full md:w-auto">
                            Send Transmission
                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};
