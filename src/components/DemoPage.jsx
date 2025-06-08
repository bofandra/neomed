import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 space-y-16">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Product Showcases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-white/5 border border-white/10">
              <CardContent className="p-4">
                <img
                  src={`/images/showcase${i}.jpg`}
                  alt={`Showcase ${i}`}
                  className="rounded-lg mb-2"
                />
                <p className="text-sm text-slate-300">Feature highlight description {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Dr. A. Smith", "Jane Doe", "John Lee"].map((name, index) => (
            <Card key={index} className="bg-white/5 border border-white/10 w-60">
              <CardContent className="p-4 text-center">
                <img
                  src={`/images/team${index + 1}.jpg`}
                  alt={name}
                  className="rounded-full w-24 h-24 mx-auto mb-2"
                />
                <h3 className="text-lg font-medium mb-1">{name}</h3>
                <p className="text-slate-400 text-sm">Role or short bio</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Request a Personalized Demo</h2>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <Input name="name" placeholder="Your Name" required className="bg-slate-800 text-white" />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-slate-800 text-white"
          />
          <Textarea
            name="message"
            placeholder="Tell us what you're looking for..."
            className="bg-slate-800 text-white"
            rows={5}
          />
          <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
            Send Request
          </Button>
        </form>
      </section>
    </div>
  );
}
