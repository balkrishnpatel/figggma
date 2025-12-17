// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, ChevronDown, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { MegaMenu } from "@/components/mega-menu"
// import Image from "next/image"
// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
//   const pathname = usePathname()
//   const headerRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     const handleClickOutside = (event: MouseEvent) => {
//       if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
//         setActiveMegaMenu(null)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     document.addEventListener("mousedown", handleClickOutside)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   const navLinks = [
//     { name: "Company", href: "/company", megaMenu: "company" },
//     { name: "Services", href: "/services", megaMenu: "services" },
//     { name: "Technologies", href: "/technologies", megaMenu: "technologies" },
//     { name: "Industries", href: "/industries", megaMenu: "industries" },
//     { name: "Resources", href: "/resources", megaMenu: "resources" },
//     { name: "Contact", href: "/contact" },
//   ]

//   const toggleMegaMenu = (menuName: string) => {
//     if (activeMegaMenu === menuName) {
//       setActiveMegaMenu(null)
//     } else {
//       setActiveMegaMenu(menuName)
//     }
//   }

//   return (
//     <header
//       ref={headerRef}
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-white shadow-lg py-3" : "bg-white/70 backdrop-blur-sm py-5",
//       )}
//     >
//       <div className="container px-4 mx-auto">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <div className="relative">
//               {/* <span
//                 className={cn(
//                   "text-2xl font-bold transition-colors relative z-10",
//                   isScrolled
//                     ? "bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent"
//                     : "bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent",
//                 )}
//               >
//                 MHLP
//               </span> */}
              
//               <Image
//                  src="/Mhlp_Logo_final _3.svg"
//                  alt="MHLP"
//                  width={140} // Adjust width
//                  height={60} // Adjust height
//                  className="relative z-10"
//                />
//               {!isScrolled && <div className="absolute -inset-1 bg-white/20 blur-sm rounded-lg -z-10"></div>}
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative">
//                 {link.megaMenu ? (
//                   <button
//                     onClick={() => toggleMegaMenu(link.megaMenu)}
//                     className={cn(
//                       "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
//                       isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary",
//                       activeMegaMenu === link.megaMenu && (isScrolled ? "text-primary" : "text-primary bg-white/80"),
//                     )}
//                   >
//                     {link.name}
//                     <ChevronDown
//                       className={cn(
//                         "ml-1 h-4 w-4 transition-transform duration-300 group-hover:text-accent",
//                         activeMegaMenu === link.megaMenu && "rotate-180",
//                       )}
//                     />
//                     {!isScrolled && (
//                       <span className="absolute inset-0 -z-10 bg-white/80 scale-0 rounded-md transition-transform duration-300 group-hover:scale-100"></span>
//                     )}
//                   </button>
//                 ) : (
//                   <Link
//                     href={link.href}
//                     className={cn(
//                       "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 group relative",
//                       isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary",
//                       pathname === link.href && (isScrolled ? "text-primary" : "text-primary"),
//                     )}
//                   >
//                     {link.name}
//                     {!isScrolled && (
//                       <span className="absolute inset-0 -z-10 bg-white/80 scale-0 rounded-md transition-transform duration-300 group-hover:scale-100"></span>
//                     )}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           <div className="hidden lg:flex items-center space-x-4">
//             {/* <button
//               className={cn(
//                 "p-2 rounded-full transition-all duration-300 hover:scale-110",
//                 isScrolled
//                   ? "text-gray-700 hover:text-primary hover:bg-primary/10"
//                   : "text-gray-700 hover:text-primary hover:bg-primary/10",
//               )}
//             >
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </button> */}
//             {/* <button
//               className={cn(
//                 "p-2 rounded-full transition-all duration-300 hover:scale-110",
//                 isScrolled
//                   ? "text-gray-700 hover:text-primary hover:bg-primary/10"
//                   : "text-gray-700 hover:text-primary hover:bg-primary/10",
//               )}
//             >
//               <User className="h-5 w-5" />
//               <span className="sr-only">Account</span>
//             </button> */}
//             <Button
//               className={cn(
//                 "transition-all duration-300 hover:scale-105 relative group overflow-hidden",
//                 "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white",
//               )}
//             >
//               <Link href="/contact">
//                 <span className="relative z-10">Get Started</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               </Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center space-x-2">
//             {/* <button
//               className={cn(
//                 "p-2 rounded-full transition-colors",
//                 isScrolled
//                   ? "text-gray-700 hover:text-primary hover:bg-primary/10"
//                   : "text-white/90 hover:text-white hover:bg-white/10",
//               )}
//             >
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </button> */}
//             <button className="p-2 rounded-md" onClick={() => {
//              setActiveMegaMenu(null)
//              setIsMobileMenuOpen(!isMobileMenuOpen)
//             }
//              }>
//               {isMobileMenuOpen ? (
//                 <X className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-black")} />
//               ) : (
//                 <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-black")} />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu */}
//       <MegaMenu isScrolled={isScrolled} activeCategory={activeMegaMenu} onClose={() => {
//         setActiveMegaMenu(null)
//       setIsMobileMenuOpen(false);
//         }} onCloseCross={()=>{
//           setActiveMegaMenu(null)    
//         }}/>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto w-full">
//           <div className="container px-4 mx-auto py-4">
//             <nav className="flex flex-col space-y-2">
//               {navLinks.map((link) => (
//                 <div key={link.name} className="flex flex-col">
//                   <Link
//                     href={link.megaMenu ? "#" : link.href}
//                     className={cn(
//                       "px-4 py-3 rounded-md text-sm font-medium",
//                       pathname === link.href
//                         ? "text-primary bg-primary/10"
//                         : "text-gray-700 hover:text-primary hover:bg-gray-100",
//                     )}
//                     onClick={() => {
//                       if (!link.megaMenu) {
//                         setIsMobileMenuOpen(false)
//                       } else {
//                         toggleMegaMenu(link.megaMenu)
//                       }
//                     }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <span>{link.name}</span>
//                       {link.megaMenu && (
//                         <ChevronDown
//                           className={cn(
//                             "ml-1 h-4 w-4 transition-transform duration-300",
//                             activeMegaMenu === link.megaMenu && "rotate-180",
//                           )}
//                         />
//                       )}
//                     </div>
//                   </Link>

//                   {/* Add View All Services link for mobile */}
//                   {link.name === "Services" && (
//                     <Link
//                       href="/services"
//                       className="px-4 py-2 ml-4 text-sm font-medium text-primary hover:text-accent flex items-center"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       View all services
//                       <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-3">
//               <Button className="w-full justify-center bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
//                 <Link href="/contact" className="w-full">
//                   Get Started
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }





"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MegaMenu } from "@/components/mega-menu"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company", megaMenu: "company" },
    { name: "Services", href: "/services", megaMenu: "services" },
    { name: "Technologies", href: "/technologies", megaMenu: "technologies" },
    { name: "Industries", href: "/industries", megaMenu: "industries" },
    { name: "Resources", href: "/resources", megaMenu: "resources" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMegaMenu = (menuName: string) => {
    if (activeMegaMenu === menuName) {
      setActiveMegaMenu(null)
    } else {
      setActiveMegaMenu(menuName)
    }
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-lg py-3" 
          : "bg-white py-4",
      )}
    >
      {/* Top colored accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3d5af1] via-[#00d4ff] to-[#00b894]"></div>

      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/Mhlp_Logo_final _3.svg"
                alt="MHLP"
                width={140}
                height={60}
                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.megaMenu ? (
                  <button
                    onClick={() => toggleMegaMenu(link.megaMenu)}
                    className={cn(
                      "flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 group relative",
                      "text-gray-700 hover:text-[#3d5af1]",
                      activeMegaMenu === link.megaMenu && "text-[#3d5af1] bg-[#3d5af1]/5",
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "ml-1.5 h-4 w-4 transition-transform duration-300",
                        activeMegaMenu === link.megaMenu && "rotate-180 text-[#00d4ff]",
                      )}
                    />
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 group relative block",
                      "text-gray-700 hover:text-[#3d5af1]",
                      pathname === link.href && "text-[#3d5af1] bg-[#3d5af1]/5",
                    )}
                  >
                    {link.name}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
          
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors" 
              onClick={() => {
                setActiveMegaMenu(null)
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu 
        isScrolled={isScrolled} 
        activeCategory={activeMegaMenu} 
        onClose={() => {
          setActiveMegaMenu(null)
          setIsMobileMenuOpen(false)
        }} 
        onCloseCross={() => {
          setActiveMegaMenu(null)    
        }}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-gray-100 absolute top-full left-0 right-0 shadow-2xl max-h-[80vh] overflow-y-auto w-full">
          <div className="container px-4 mx-auto py-6">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.megaMenu ? "#" : link.href}
                    className={cn(
                      "px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300",
                      pathname === link.href
                        ? "text-[#3d5af1] bg-gradient-to-r from-[#3d5af1]/10 to-[#00d4ff]/10"
                        : "text-gray-700 hover:text-[#3d5af1] hover:bg-gray-50",
                    )}
                    onClick={() => {
                      if (!link.megaMenu) {
                        setIsMobileMenuOpen(false)
                      } else {
                        toggleMegaMenu(link.megaMenu)
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      {link.megaMenu && (
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-300",
                            activeMegaMenu === link.megaMenu && "rotate-180 text-[#00d4ff]",
                          )}
                        />
                      )}
                    </div>
                  </Link>

                  {/* View All Services link for mobile */}
                  {link.name === "Services" && (
                    <Link
                      href="/services"
                      className="px-4 py-2 ml-4 text-sm font-medium text-[#3d5af1] hover:text-[#00d4ff] flex items-center transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View all services
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <Button className="w-full justify-center bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] hover:from-[#3d5af1]/90 hover:to-[#00d4ff]/90 text-white font-semibold py-3.5 rounded-xl shadow-lg group">
                <Link href="/contact" className="w-full flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}