// import Link from "next/link"
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Github,
//   Mail,
//   Phone,
//   MapPin,
//   ChevronRight,
//   ArrowRight,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-secondary text-white">
//       <div className="container px-4 mx-auto py-16">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-12">
//           <div>
//             {/* <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
//               Vastorax
//             </h3> */}

//             <img
//               src="/Mhlp_Logo_final.svg"
//                  alt="Vastorax"
//                  className="relative z-10 h-[110px] w-auto"
//             />
          
//             <p className="text-gray-400 mb-6">
//               Transforming businesses with cutting-edge technology solutions that drive growth, efficiency, and
//               innovation.
//             </p>
//             <div className="flex space-x-4">
//               {[
//                 { icon: Facebook, href: "https://www.facebook.com/CyberInstant" },
//                 { icon: Twitter, href: "https://x.com/cyber_instant" },
//                 { icon: Instagram, href: "https://www.instagram.com/cyber_instant/" },
//                 { icon: Linkedin, href: "https://www.linkedin.com/company/cyber-instant/posts/?feedView=all" },
//                 // { icon: Github, href: "#" },
//               ].map((social, index) => (
//                 <Link
//                   key={index}
//                   href={social.href}
//                   className="text-gray-400 hover:text-accent transition-colors duration-300 hover:scale-125 transform transition-transform"
//                 >
//                   <social.icon className="h-5 w-5" />
//                   <span className="sr-only">{social.icon.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Home", href: "/" },
//                 { name: "About Us", href: "/about" },
//                 { name: "Services", href: "/services" },
//                 { name: "Blog", href: "/blog" },
//                 { name: "Careers", href: "/careers" },
//                 { name: "Contact", href: "/contact" },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group"
//                   >
//                     <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start group">
//                 <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transition-transform" />
//                 <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   123 Tech Park, Innovation Street
//                   <br />
//                   Silicon Valley, CA 94043
//                 </span>
//               </li>
//               <li className="flex items-center group">
//                 <Phone className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transition-transform" />
//                 <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   +1 (555) 123-4567
//                 </span>
//               </li>
//               <li className="flex items-center group">
//                 <Mail className="h-5 w-5 text-accent mr-3 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transition-transform" />
//                 <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   info@cyberinstant.com
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter to receive updates on the latest technologies and industry insights.
//             </p>
//             <div className="space-y-3">
//               <Input
//                 type="email"
//                 placeholder="Your email address"
//                 className="bg-secondary-foreground/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-accent"
//               />
//               <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
//                 Subscribe
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-0">
//             &copy; {currentYear} Vastorax. All rights reserved.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//             {[
//               { name: "Privacy Policy", href: "/privacy-policy" },
//               { name: "Terms of Service", href: "/terms-of-service" }
//             ].map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-500 hover:text-accent text-xs md:text-sm transition-colors duration-300"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }




import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#1a2742] to-[#0f1f3a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#22d3ee] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-12">
          <div>
            <img
              src="/Mhlp_Logo_final _3.svg"
              alt="MHLP"
              className="relative z-10 h-[60px] w-auto mb-6"
            />
          
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with cutting-edge technology solutions that drive growth, efficiency, and
              innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/CyberInstant" },
                { icon: Twitter, href: "https://x.com/cyber_instant" },
                { icon: Instagram, href: "https://www.instagram.com/cyber_instant/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/cyber-instant/posts/?feedView=all" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-[#22d3ee] transition-all duration-300 hover:scale-125 transform"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#22d3ee] transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-[#3b82f6] group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-[#22d3ee] mr-3 mt-0.5 group-hover:text-[#3b82f6] transition-colors duration-300 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  123 Tech Park, Innovation Street
                  <br />
                  Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-[#22d3ee] mr-3 group-hover:text-[#3b82f6] transition-colors duration-300 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-[#22d3ee] mr-3 group-hover:text-[#3b82f6] transition-colors duration-300 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  info@cyberinstant.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] bg-clip-text text-transparent">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on the latest technologies and industry insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-[#3b82f6]/30 text-white placeholder:text-gray-400 focus:border-[#22d3ee] focus:ring-[#22d3ee]"
              />
              <Button className="w-full bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] hover:from-[#3b82f6]/90 hover:to-[#22d3ee]/90 text-white group shadow-lg shadow-[#3b82f6]/20">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#3b82f6]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
            &copy; {currentYear} MHLP. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-[#22d3ee] text-xs md:text-sm transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}