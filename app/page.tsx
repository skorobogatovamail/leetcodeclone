import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Features from "@/components/Features";
import Navbar from "@/components/Navbar/Navbar";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-8 sm:px-20 bg-gradient-to-b from-slate-50 to-white">
        <main className="px-15">
          <section className="py-20 flex flex-col gap-5 px-4">
            <Title
              className="max-w-[600px]"
              text="Master coding interviews with confidence"
            />
            <Subtitle
              className="max-w-[600px]"
              text="Our platform is tailored to help you prepare for coding interviews smoothly. 
          Developed by interviewers from top tech companies."
            />
            <Link href="/tasks">
              <Button size="lg" className="gap-1">
                <span>Browse Questions</span>
                <ArrowRight />
              </Button>
            </Link>
          </section>
          <section className="py-12 px-4">
            <Features />
          </section>
        </main>
      </div>
    </>
  );
}
