import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const menuData = [
    { label: "About us", link: "#about-us" },
    { label: "Services", link: "#services" },
    { label: "Contact Us", link: "#contact" },
  ];

  const contactInfo = [
    {
      icon: "/mail.svg",
      text: "contact@cityrents.com",
      href: "mailto:contact@cityrents.com",
    },
    { icon: "/phone.svg", text: "+91 1234567890", href: "tel:+911234567890" },
    {
      icon: "/address.svg",
      text: "123, Ammerpet, Hyderabad, Telanagana, 543123",
      href: "https://cityrents.com",
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-800 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <Image
                src="/logo.svg"
                alt="City Rents Logo"
                width={40}
                height={40}
              /> */}
              <span className="font-semibold text-xl">City Rents</span>
            </Link>
            <p className="text-sm max-w-md">
              CityRents is a leading real estate agency helping clients find
              their dream homes. With years of experience and a dedicated team,
              we strive to provide exceptional service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuData.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="text-sm hover:text-indigo-600 transition-colors duration-300"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <Link
                    href={item.href}
                    className="text-sm hover:text-indigo-600 transition-colors duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} CityRents Private | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
