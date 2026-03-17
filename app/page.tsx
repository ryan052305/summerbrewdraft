"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TikTokIcon } from "@/components/TikTokIcon"

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
  Twitter,
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
  const coffees = [1, 2, 3, 4]
  const desserts = [1, 2, 3, 4]
  const testimonials = [1, 2, 3]

  return (

    <main className="w-full text-[#1e1e1e]">

      {/* NAVBAR */}

      <nav className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-black/40 backdrop-blur-md border-b border-white/10"
        : "bg-transparent border-b border-transparent"
        }`}>

        <div className="max-w-300 mx-auto flex items-center justify-between py-5 px-4">

          {/* Logo */}
          <h1 className="tracking-[5px] font-semibold text-sm uppercase">
            summer<span className="font-normal font-serif">brew</span>
          </h1>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[3px] uppercase text-white/80 flex-1 justify-center">

            <a href="#hero" className="hover:text-white transition cursor-pointer">
              Home
            </a>

            <a href="#coffee" className="hover:text-white transition cursor-pointer">
              Coffee
            </a>
            <a href="#tea" className="hover:text-white transition cursor-pointer">
              Tea
            </a>

            <a href="#dessert" className="hover:text-white transition cursor-pointer">
              Pastry
            </a>

            <a href="#promo" className="hover:text-white transition cursor-pointer">
              Shop
            </a>

            <a href="#testimonials" className="hover:text-white transition cursor-pointer">
              About
            </a>

          </div>


          {/* Right Icons */}
          <div className="flex items-center gap-3">

            <Cookie size={18} className="text-white/90" />

            <button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center">
              <Search size={16} />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>


        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-300 z-50 ${open ? "translate-y-0" : "-translate-y-full"
            }`}
        >

          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center justify-center h-full gap-8 text-sm tracking-[4px] uppercase">

            <a href="#hero" onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/80 transition">Home</a>
            <a href="#coffee" onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/80 transition">Coffee</a>
            <a href="#dessert" onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/80 transition">Pastry</a>
            <a href="#promo" onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/80 transition">Shop</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/80 transition">About</a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      {<section
        id="hero"
        className="relative text-white min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background layers */}

        <div className="absolute inset-0 bg-[#191919]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,140,0,0.25),transparent_45%),radial-gradient(circle_at_50%_60%,rgba(255,140,0,0.18),transparent_50%)]" />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/banner.png')",
            backgroundSize: "cover",
            imageRendering: "crisp-edges",
          }}
        />

        {/* Vignette fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        {/* Content */}

        <div className="relative z-10 max-w-300 mx-auto w-full grid md:grid-cols-2 px-4 items-center gap-10 md:gap-0">

          {/* TEXT */}

          <div className="max-w-130 mx-auto md:mx-0 text-center md:text-left py-14 sm:py-16 md:py-0">

            <p className="tracking-[5px] text-xs sm:text-sm mb-5 text-white/70">
              WELCOME
            </p>

            <h1 className="text-[38px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] font-serif mb-6 whitespace-nowrap">
              Change the World.
              <br />
              Start with Coffee.
            </h1>

            <p className="text-white/70 mb-8 max-w-105 mx-auto md:mx-0 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor.
            </p>

            <Button className="rounded-full px-8 sm:px-10 bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.25)] text-sm sm:text-base">
              Order Now
            </Button>

          </div>

          {/* IMAGE COLUMN (kept for layout alignment) */}

          <div className="hidden md:block" />

        </div>
      </section>
      }


      {/* CATEGORY STRIP */}

      <section className="bg-[#d6cfc2] py-10">

        <div className="max-w-250 mx-10 sm:mx-auto  grid grid-cols-4 sm:grid-cols-4 gap-6 text-center">

          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3">
            <Coffee size={44} />
            <p className="text-sm font-medium">Hot Coffee</p>
          </div>

          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3">
            <Snowflake size={44} />
            <p className="text-sm font-medium">Iced Coffee</p>
          </div>

          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3">
            <Leaf size={44} />
            <p className="text-sm font-medium">Tea</p>
          </div>

          <div className="flex flex-col items-center scale-80 sm:scale-100 gap-3">
            <CakeSlice size={44} />
            <p className="text-sm font-medium">Dessert</p>
          </div>

        </div>

      </section>

      {/* SPECIAL COFFEE */}

      <section id="coffee" className="py-20 sm:py-24">

        <div className="max-w-300 mx-auto px-6">

          <div className="flex items-center justify-between mb-10 sm:mb-14">

            <h2 className="text-xl tracking-[4px] font-serif">
              OUR SPECIAL COFFEE
            </h2>

            <div className="flex gap-3">

              <button className="p-2 rounded-full border">
                <ArrowLeft size={16} />
              </button>

              <button className="p-2 rounded-full border">
                <ArrowRight size={16} />
              </button>

            </div>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            {coffees.map((item, i) => (

              <Card key={i} className="rounded-xl overflow-hidden border-none shadow-sm bg-[#f6f1e8]">

                <div className="h-55 bg-gray-200 relative flex items-center justify-center overflow-hidden">

                  <img src="/3.jpg" alt="Coffee" className="w-full h-full object-cover" />

                  <div className="absolute top-3 right-3">
                    <Heart size={18} />
                  </div>

                </div>

                <CardContent className="p-5">

                  <h3 className="font-semibold mb-2">
                    Lungo coffee
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      ₱120.00
                    </span>

                    <Button size="sm" className="bg-[#3b1f14] hover:bg-[#2a150e]">
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

      <section id="tea" className="py-20 sm:py-24 bg-[#f7f7f7]">

        <div className="max-w-300 mx-auto px-6">

          <div className="flex items-center justify-between mb-10 sm:mb-14">

            <h2 className="text-xl tracking-[4px] font-serif">
              OUR SPECIAL TEA
            </h2>

            <div className="flex gap-3">

              <button className="p-2 rounded-full border">
                <ArrowLeft size={16} />
              </button>

              <button className="p-2 rounded-full border">
                <ArrowRight size={16} />
              </button>

            </div>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            {desserts.map((item, i) => (

              <Card key={i} className="rounded-xl overflow-hidden border-none shadow-sm bg-[#f6f1e8]">

                <div className="h-55 bg-gray-200 relative flex items-center justify-center overflow-hidden">

                  <img src="/tea.jpg" alt="Tea" className="w-full h-full object-cover " />

                  <div className="absolute top-3 right-3">
                    <Heart size={18} />
                  </div>

                </div>

                <CardContent className="p-5">

                  <h3 className="font-semibold mb-2">
                    Lungo tea
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      ₱120.00
                    </span>

                    <Button size="sm" className="bg-[#3b1f14] hover:bg-[#2a150e]">
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

      <section id="dessert" className="py-20 sm:py-24 bg-[#f7f7f7]">

        <div className="max-w-300 mx-auto px-6">

          <div className="flex items-center justify-between mb-10 sm:mb-14">

            <h2 className="text-xl tracking-[4px] font-serif">
              OUR SPECIAL DESSERT
            </h2>

            <div className="flex gap-3">

              <button className="p-2 rounded-full border">
                <ArrowLeft size={16} />
              </button>

              <button className="p-2 rounded-full border">
                <ArrowRight size={16} />
              </button>

            </div>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            {desserts.map((item, i) => (

              <Card key={i} className="rounded-xl overflow-hidden border-none shadow-sm bg-[#f6f1e8]">

                <div className="h-55 bg-gray-200 relative flex items-center justify-center overflow-hidden">

                  <img src="/6.jpg" alt="Dessert" className="w-full h-full object-cover object-bottom scale-125" />

                  <div className="absolute top-3 right-3">
                    <Heart size={18} />
                  </div>

                </div>

                <CardContent className="p-5">

                  <h3 className="font-semibold mb-2">
                    Lungo dessert
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      ₱120.00
                    </span>

                    <Button size="sm" className="bg-[#3b1f14] hover:bg-[#2a150e]">
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

      <section id="promo" className="bg-[#d6cfc2] py-14 sm:py-16 md:py-20 overflow-hidden">

        <div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          <div className="flex w-32 sm:w-36 md:w-40 h-32 sm:h-40 md:h-56 shrink-0 md:-ml-30 md:-mt-90">
            <img src="/coffee_with_hande.png" alt="Coffee hand" className="w-full h-full object-contain object-bottom md:scale-350" />
          </div>

          <div className="flex-1 text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-3xl md:ml-20 font-serif font-semibold mb-4 sm:mb-6 leading-snug">
              Check Out Our Best
              <br />
              Coffee Beans
            </h2>

            <Button className="bg-[#3b1f14] md:ml-20 rounded-2xl p-5 hover:bg-[#2a150e]">
              Explore Our Products <div className="ml-2">→</div>
            </Button>

          </div>

          <div className="flex w-56 sm:w-64 md:w-96 h-32 sm:h-40 md:h-56 shrink-0 md:-mr-30">
            <img src="/coffee_beans.png" alt="Coffee beans" className="w-full h-full object-contain md:scale-250" />
          </div>

        </div>

      </section>



      {/* TESTIMONIALS */}

      <section id="testimonials" className="py-28">

        <div className="max-w-275 mx-auto px-6">

          <h2 className="text-center font-serif text-2xl mb-16">
            Come and Join
            <br />
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, i) => (

              <Card
                key={i}
                className="shadow-sm border border-amber-200 bg-amber-50"
              >

                <CardContent className="p-6">

                  <div className="flex items-center gap-4 mb-4">

                    <Avatar>
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>

                    <div>

                      <p className="font-semibold">
                        James Smith
                      </p>

                      <div className="flex text-yellow-500">

                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />

                      </div>

                    </div>

                  </div>

                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

          <div className="flex justify-center gap-2 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b1f14]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b1f14]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b1f14]/30" />
          </div>

        </div>

      </section>



      {/* NEWSLETTER */}

      <section className="bg-[#dcd1c1] py-15 overflow-hidden">

        <div className="max-w-275 mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          <div className="max-w-140 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-3 text-[#3b2b20]">
              Join in and ger 15% off!
            </h2>

            <p className="text-sm sm:text-base text-[#4a3b30] mb-8">
              Subscribe to our newsletter in get 15% off discount code.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">

              <div className="relative w-full sm:max-w-90">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b5b4f]" />
                <Input
                  placeholder="Email address"
                  className="w-full rounded-full pl-11 pr-4 py-5 bg-white border border-[#e6ded2]"
                />
              </div>

              <Button className="rounded-full px-10 bg-[#3b2b20] hover:bg-[#2a1f18]">
                Subscribe
              </Button>

            </div>
          </div>

          <div className="flex w-56 lg:w-80 h-36 shrink-0 items-center justify-center md:justify-end">
            <img src="/coffee_cup.png" alt="Coffee cup" className="w-full h-full object-contain md:scale-350" />
          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="bg-[#2b1a12] text-white py-20 border-t border-white/10">

        <div className="max-w-300 mx-auto px-6 grid grid-cols-2 gap-x-10 gap-y-12 text-sm md:flex md:items-start md:justify-between md:gap-8">

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4 tracking-[6px]">
              SUMMER<span className="font-serif">BREW</span>
            </h3>
            <p className="text-white/70 text-xs leading-relaxed max-w-48">
              Crafted coffee, shared moments, and warm mornings—stay close to the brew.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-white/80">Privacy</p>
            <p className="text-white/70 hover:text-white transition">Terms of use</p>
            <p className="text-white/70 hover:text-white transition">Privacy policy</p>
            <p className="text-white/70 hover:text-white transition">Cookies</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-white/80">Services</p>
            <p className="text-white/70 hover:text-white transition">Shop</p>
            <p className="text-white/70 hover:text-white transition">Order food</p>
            <p className="text-white/70 hover:text-white transition">Menu</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-white/80">About Us</p>
            <p className="text-white/70 hover:text-white transition">Find location</p>
            <p className="text-white/70 hover:text-white transition">About us</p>
            <p className="text-white/70 hover:text-white transition">Jobs</p>
          </div>

          <div>
            <p className="font-medium mb-4 tracking-widest text-xs uppercase text-white/80">Social</p>

            <div className="flex gap-4 mt-2 items-center text-white/80">

              <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:text-white transition">
                <Facebook size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:text-white transition">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:text-white transition">
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
