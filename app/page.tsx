"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TikTokIcon } from "@/components/TikTokIcon"
import React from 'react';

import {
  Search,
  Cookie,
  Coffee,
  Snowflake,
  Leaf,
  Mail,
  CakeSlice,
  Heart,
  ArrowLeft,
  ArrowRight,
  Star,
  Facebook,
  Menu,
  X,
  Instagram
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Typed arrays (optional but good practice in TS)
  const coffees: number[] = [1, 2, 3, 4]
  const desserts: number[] = [1, 2, 3, 4]
  const testimonials: number[] = [1, 2, 3]

  return (
    <main className="w-full bg-[#f9f8f4] text-[#2d3a2b]">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-white/70 backdrop-blur-md border-b border-[#7a8b6c]/20 text-[#2d3a2b] shadow-sm"
        : "bg-transparent border-b border-transparent text-white"
        }`}>
        <div className="max-w-300 mx-auto flex items-center justify-between py-5 px-4">
          {/* Logo */}
          <h1 className="tracking-[2px] font-semibold font-serif text-md">
            Cafe del <span className={`transition-colors duration-500 ${isScrolled ? "text-[#7a8b6c]" : "text-white"}`}>Riu</span>
          </h1>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 text-xs tracking-[3px] uppercase font-medium flex-1 justify-center transition-colors duration-500 ${isScrolled ? "text-[#4a5d4e]" : "text-white/90"}`}>
            <a href="#hero" className="hover:text-[#7a8b6c] transition cursor-pointer">Home</a>
            <a href="#coffee" className="hover:text-[#7a8b6c] transition cursor-pointer">Coffee</a>
            <a href="#tea" className="hover:text-[#7a8b6c] transition cursor-pointer">Tea</a>
            <a href="#dessert" className="hover:text-[#7a8b6c] transition cursor-pointer">Pastry</a>
            <a href="#promo" className="hover:text-[#7a8b6c] transition cursor-pointer">Shop</a>
            <a href="#testimonials" className="hover:text-[#7a8b6c] transition cursor-pointer">About</a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <Cookie size={18} className={`transition-colors duration-500 ${isScrolled ? "text-[#7a8b6c]" : "text-white"}`} />
            <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${isScrolled ? "bg-[#2d3a2b] text-white hover:bg-[#7a8b6c]" : "bg-white text-[#2d3a2b] hover:bg-white/80"}`}>
              <Search size={16} />
            </button>
            {/* Mobile Hamburger */}
            {/* Inherits text color from the nav container automatically! */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center transition-colors duration-500"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#f9f8f4] transition-transform duration-300 z-50 ${open ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6 text-[#2d3a2b]">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>
          {/* Menu Links */}
          <div className="flex flex-col items-center justify-center h-full gap-8 text-sm tracking-[4px] uppercase text-[#2d3a2b] font-medium">
            <a href="#hero" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#7a8b6c] transition">Home</a>
            <a href="#coffee" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#7a8b6c] transition">Coffee</a>
            <a href="#dessert" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#7a8b6c] transition">Pastry</a>
            <a href="#promo" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#7a8b6c] transition">Shop</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#7a8b6c] transition">About</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f1efe9]"
      >
        {/* Background layers: Swapped dark overlays for airy, light overlays */}
        <div className="absolute inset-0 bg-[#f9f8f4]/40 z-0" />

        <div
          className="absolute inset-0 bg-cover bg-position-[65%_center] md:bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cover_picture.jpg')",
            backgroundSize: "cover",
            imageRendering: "crisp-edges",
          }}
        />

        {/* Soft vignette to ensure text readability */}
        {/* <div className="absolute inset-0 bg-linear-to-t from-[#f9f8f4] via-[#f9f8f4]/30 to-transparent" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-300 mx-auto w-full grid md:grid-cols-2 px-4 items-center gap-10 md:gap-0">
          {/* TEXT */}
          <div className="max-w-130 mx-auto md:mx-0 text-center md:text-left py-14 sm:py-16 md:py-0">
            <p className="tracking-[5px] text-xs sm:text-sm mb-5 text-white/70 font-medium">
              WELCOME
            </p>
            <h1 className="text-[38px] drop-shadow-md sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] font-serif italic mb-6 whitespace-nowrap text-white">
              Blessed Brews,
              <br />
              Blessed Days..
            </h1>
            <p className="text-white/70 mb-8 max-w-105 mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
              Polishing every corner, bringing new life <br /> to familiar comfort.
            </p>
            <Button className="rounded-full px-8 sm:px-10 bg-[#7a8b6c] text-white hover:bg-[#5a6b4a] shadow-lg text-sm sm:text-base transition-all">
              Order Now
            </Button>
          </div>
          {/* IMAGE COLUMN */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="bg-[#e2e4d9] py-10 border-y border-[#d3dbcc]">
        <div className="max-w-250 mx-10 sm:mx-auto grid grid-cols-4 sm:grid-cols-4 gap-6 text-center text-[#2d3a2b]">
          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3 hover:text-[#7a8b6c] transition-colors cursor-pointer">
            <Coffee size={44} strokeWidth={1.5} />
            <p className="text-sm font-medium tracking-wide">Hot Coffee</p>
          </div>
          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3 hover:text-[#7a8b6c] transition-colors cursor-pointer">
            <Snowflake size={44} strokeWidth={1.5} />
            <p className="text-sm font-medium tracking-wide">Iced Coffee</p>
          </div>
          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3 hover:text-[#7a8b6c] transition-colors cursor-pointer">
            <Leaf size={44} strokeWidth={1.5} />
            <p className="text-sm font-medium tracking-wide">Tea</p>
          </div>
          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3 hover:text-[#7a8b6c] transition-colors cursor-pointer">
            <CakeSlice size={44} strokeWidth={1.5} />
            <p className="text-sm font-medium tracking-wide">Dessert</p>
          </div>
        </div>
      </section>

      {/* SPECIAL COFFEE */}
      <section id="coffee" className="py-20 sm:py-24 bg-[#f9f8f4]">
        <div className="max-w-300 mx-auto px-6">
          <div className="flex items-center justify-between mb-10 sm:mb-14">
            <h2 className="text-xl tracking-[4px] font-serif text-[#7a8b6c] uppercase">
              OUR SPECIAL COFFEE
            </h2>
            <div className="flex gap-3">
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {coffees.map((_, i) => (
              <Card key={i} className="rounded-xl overflow-hidden border border-[#eae6db] shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="h-55 bg-[#f1efe9] relative flex items-center justify-center overflow-hidden">
                  <img src="/3.jpg" alt="Coffee" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 text-[#2d3a2b] bg-white/60 backdrop-blur-sm p-1.5 rounded-full cursor-pointer hover:bg-white transition-colors">
                    <Heart size={16} />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif italic text-lg font-semibold mb-2 text-[#2d3a2b]">
                    Lungo coffee
                  </h3>
                  <p className="text-sm text-[#7a8b6c] mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2d3a2b]">
                      ₱120.00
                    </span>
                    <Button size="sm" className="bg-[#7a8b6c] hover:bg-[#5a6b4a] text-white">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEA */}
      <section id="tea" className="py-20 sm:py-24 bg-[#f1efe9]">
        <div className="max-w-300 mx-auto px-6">
          <div className="flex items-center justify-between mb-10 sm:mb-14">
            <h2 className="text-xl tracking-[4px] font-serif text-[#7a8b6c] uppercase">
              OUR SPECIAL TEA
            </h2>
            <div className="flex gap-3">
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {desserts.map((_, i) => (
              <Card key={i} className="rounded-xl overflow-hidden border border-[#eae6db] shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="h-55 bg-[#f1efe9] relative flex items-center justify-center overflow-hidden">
                  <img src="/4.jpg" alt="Tea" className="w-full h-full object-cover " />
                  <div className="absolute top-3 right-3 text-[#2d3a2b] bg-white/60 backdrop-blur-sm p-1.5 rounded-full cursor-pointer hover:bg-white transition-colors">
                    <Heart size={16} />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif italic text-lg font-semibold mb-2 text-[#2d3a2b]">
                    Lungo tea
                  </h3>
                  <p className="text-sm text-[#7a8b6c] mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2d3a2b]">
                      ₱120.00
                    </span>
                    <Button size="sm" className="bg-[#7a8b6c] hover:bg-[#5a6b4a] text-white">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL DESSERT */}
      <section id="dessert" className="py-20 sm:py-24 bg-[#f9f8f4]">
        <div className="max-w-300 mx-auto px-6">
          <div className="flex items-center justify-between mb-10 sm:mb-14">
            <h2 className="text-xl tracking-[4px] font-serif text-[#7a8b6c] uppercase">
              OUR SPECIAL DESSERT
            </h2>
            <div className="flex gap-3">
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button className="p-2 rounded-full border border-[#d3dbcc] text-[#4a5d4e] hover:bg-[#7a8b6c] hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {desserts.map((_, i) => (
              <Card key={i} className="rounded-xl overflow-hidden border border-[#eae6db] shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="h-55 bg-[#f1efe9] relative flex items-center justify-center overflow-hidden">
                  <img src="/2.jpg" alt="Dessert" className="w-full h-full object-cover object-bottom scale-125" />
                  <div className="absolute top-3 right-3 text-[#2d3a2b] bg-white/60 backdrop-blur-sm p-1.5 rounded-full cursor-pointer hover:bg-white transition-colors">
                    <Heart size={16} />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif italic text-lg font-semibold mb-2 text-[#2d3a2b]">
                    Lungo dessert
                  </h3>
                  <p className="text-sm text-[#7a8b6c] mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2d3a2b]">
                      ₱120.00
                    </span>
                    <Button size="sm" className="bg-[#7a8b6c] hover:bg-[#5a6b4a] text-white">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section id="promo" className="bg-[#e4e1d7] py-14 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="hidden sm:flex w-32 sm:w-36 md:w-40 h-32 sm:h-40 md:h-56 shrink-0 md:-ml-30 md:-mt-90">
            <img src="/coffee_with_hande.png" alt="Coffee hand" className="w-full h-full object-contain object-bottom md:scale-350" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl md:ml-20 font-serif italic font-semibold mb-4 sm:mb-6 leading-snug text-[#2d3a2b]">
              Check Out Our Best
              <br />
              Coffee Beans
            </h2>
            <Button className="bg-[#7a8b6c] md:ml-20 rounded-2xl p-5 hover:bg-[#5a6b4a] text-white shadow-md transition-all">
              Explore Our Products <div className="ml-2">→</div>
            </Button>
          </div>
          <div className="hidden w-56 sm:flex sm:w-64 md:w-96 h-32 sm:h-40 md:h-56 shrink-0 md:-mr-30">
            <img src="/coffee_beans.png" alt="Coffee beans" className="w-full h-full object-contain md:scale-250" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 bg-[#f9f8f4]">
        <div className="max-w-275 mx-auto px-6">
          <h2 className="text-center font-serif italic text-3xl mb-16 text-[#2d3a2b]">
            Come and Join
            <br />
            <span className="font-sans uppercase tracking-[3px] text-lg not-italic font-semibold text-[#7a8b6c]">OUR HAPPY CUSTOMERS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((_, i) => (
              <Card
                key={i}
                className="shadow-sm border border-[#e4e1d7] bg-[#f1efe9]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="bg-[#7a8b6c] text-white">
                      <AvatarFallback className="bg-transparent text-white">JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#2d3a2b]">
                        James Smith
                      </p>
                      <div className="flex text-[#e6a86c] mt-1">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4a5d4e] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7a8b6c]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d3dbcc]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d3dbcc]" />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#d2d7cb] py-15 overflow-hidden border-t border-[#c5ccbe]">
        <div className="max-w-275 mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-140 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif italic font-semibold mb-3 text-[#2d3a2b]">
              Join in and get 15% off!
            </h2>
            <p className="text-sm sm:text-base text-[#4a5d4e] mb-8">
              Subscribe to our newsletter to get a 15% off discount code.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
              <div className="relative w-full sm:max-w-90">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8b6c]" />
                <Input
                  placeholder="Email address"
                  className="w-full rounded-full pl-11 pr-4 py-5 bg-[#f9f8f4] border border-[#c5ccbe] focus-visible:ring-[#7a8b6c] text-[#2d3a2b] placeholder:text-[#7a8b6c]"
                />
              </div>
              <Button className="rounded-full px-10 bg-[#2d3a2b] text-[#f9f8f4] hover:bg-[#1a2319] shadow-md transition-colors">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="hidden sm:flex  w-56 lg:w-80 h-36 shrink-0 items-center justify-center md:justify-end">
            <img src="/coffee_cup.png" alt="Coffee cup" className="w-full h-full object-contain md:scale-350 opacity-90" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4c6d31] text-[#f9f8f4] py-20">
        <div className="max-w-300 mx-auto px-6 grid grid-cols-2 gap-x-10 gap-y-12 text-sm md:flex md:items-start md:justify-between md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold font-serif italic text-lg mb-4 tracking-[6px] capitalize">
              Cafe Del Riu
            </h3>
            <p className="text-[#c8cebe] text-xs leading-relaxed max-w-48">
              Crafted coffee, shared moments, and warm mornings—stay close to the brew.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-[#aeb6a1]">Privacy</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">Terms of use</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">Privacy policy</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer">Cookies</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-[#aeb6a1]">Services</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">Shop</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">Order food</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer">Menu</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-[#aeb6a1]">About Us</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">Find location</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer mb-2">About us</p>
            <p className="text-[#c8cebe] hover:text-white transition cursor-pointer">Jobs</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-[#aeb6a1]">Social</p>
            <div className="flex gap-4 mt-2 items-center text-[#c8cebe]">
              <div className="w-9 h-9 rounded-full border border-[#7a8b6c] flex items-center justify-center hover:bg-[#7a8b6c] hover:border-transparent hover:text-white transition cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-[#7a8b6c] flex items-center justify-center hover:bg-[#7a8b6c] hover:border-transparent hover:text-white transition cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-[#7a8b6c] flex items-center justify-center hover:bg-[#7a8b6c] hover:border-transparent hover:text-white transition cursor-pointer">
                <div style={{ width: "17px" }}>
                  <TikTokIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}