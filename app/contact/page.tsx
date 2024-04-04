"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/textArea";
import Footer from "@/components/footer";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  orderNumber: z
    .string()
    .length(8, { message: "the order number is 8 characters long" })
    .regex(new RegExp("^[0-9]*$"), {
      message: "the order number uses only numbers",
    }),
  email: z.string().email(),
  question: z.string().min(1, "Please fill in a question").max(250, {
    message: "The question can be a maximum of 250 characters long.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      orderNumber: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20">Contact us</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 px-20 mt-10 mb-20"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="your name" {...field} />
                </FormControl>
                <FormDescription>
                  This is what we will call you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orderNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order number</FormLabel>
                <FormControl>
                  <Input placeholder="00000000" {...field} />
                </FormControl>
                <FormDescription>
                  This is your order number if you have it.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="placeholder@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  Fill in the email you want us to contact you on.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your question</FormLabel>
                <FormControl>
                  <TextArea
                    placeholder="Your question here..."
                    {...field}
                    className="resize-none"
                  />
                </FormControl>
                <FormDescription>
                  Please tell us what you would like to know.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Footer />
    </main>
  );
}
