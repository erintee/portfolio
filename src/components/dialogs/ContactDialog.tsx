// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { useContactDialog } from "@/context/useContactDialog";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Please enter your preferred name" }),
//   email: z.string().min(1, { message: "Please enter your email address" }),
//   content: z.string().min(1, { message: "Please enter a message" }),
// });

// const ContactDialog = () => {
//   const { open, setOpen } = useContactDialog();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       content: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log("Form submitted: ", values);
//     form.reset();
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle className="my-4">Let's get in touch</DialogTitle>
//           <DialogDescription>
//             Have a project in mind? Reach out to me with your questions, ideas, or just a note to
//             say hi and I'll gladly be in touch!
//           </DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form 
//           onSubmit={form.handleSubmit(onSubmit)} 
//           className="flex flex-col"
//           >
//             {/* Name */}
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Your name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Email */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem
//                     className="mt-4"
//                 >
//                   <FormLabel>Your email address</FormLabel>
//                   <FormControl>
//                     <Input placeholder="email"  {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Message */}
//             <FormField
//               control={form.control}
//               name="content"
//               render={({ field }) => (
//                 <FormItem
//                     className="mt-4"
//                 >
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea placeholder="talk to me" className="resize-none" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="mt-4 self-end w-20 bg-yellow text-black font-bold hover:text-background focus-visible:ring-2">Send</Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactDialog;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { useContactDialog } from "@/context/useContactDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";

// Form schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your preferred name" }),
  email: z.string().min(1, { message: "Please enter your email address" }),
  content: z.string().min(1, { message: "Please enter a message" }),
});

const ContactDialog = () => {
  const { open, setOpen } = useContactDialog();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        "service_t27c5m6",
        "template_vnuu5db",
        {
          name: values.name,
          email: values.email,
          message: values.content,
        },
        "MS4YnUDenQJm8vcLH"
      );

      console.log("Email successfully sent!", values);
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-4">Let's get in touch</DialogTitle>
          <DialogDescription>
            Have a project in mind? Reach out to me with your questions, ideas,
            or just a note to say hi and I'll gladly be in touch!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Your email address</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="talk to me"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-4 self-end w-20 bg-yellow text-black font-bold hover:text-background focus-visible:ring-2"
            >
              Send
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
