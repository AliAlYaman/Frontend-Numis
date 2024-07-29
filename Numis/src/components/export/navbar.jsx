"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChartBarIcon,
  ClockIcon,
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SquaresPlusIcon,
  CurrencyEuroIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { faSurprise } from "@fortawesome/free-solid-svg-icons";
import { IconBadge, IconBrandStocktwits, IconBrandStorybook, IconBrandStorytel, IconCurrencyDollar, IconCurrencyEuroOff, IconCurrencyLira, IconLayoutSidebarRightExpandFilled, IconNews, IconReportMoney } from "@tabler/icons-react";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of our service",
    href: "#",
    icon: ChartPieIcon,
  },
  
  {
    name: "Charts",
    description: "Check trading charts to plan your trades",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "History",
    description: "Check History of the automated trades",
    href: "#",
    icon: ClockIcon,
  },
  {
    name: "Automations",
    description: "Build your own strategy to Numis",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const tools = [
  {
    name: "NumisGPT",
    description: "Chat with out AI assistant bot",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  
  {
    name: "Numis",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const learn = [
  {
    name: "Price",
    description: "Discover our annual and monthly services",
    href: "#",
    icon: IconReportMoney,
  },
  
  {
    name: "Trading Currencies",
    description: "View all of the forex pairs that you can trade",
    href: "#",
    icon: IconCurrencyDollar,
  },

  
  {
    name: "Strategies",
    description: "View all of the forex pairs that you can trade",
    href: "#",
    icon: IconBadge,
  },
  {
    name: "Forex Calendar",
    description: "Stay up to date with major events that may affect your tradings",
    href: "#",
    icon: CalendarDaysIcon,
  },


];
const about = [
  {
    name: "Our Story",
    description: "Get to know more about us",
    href: "#",
    icon: IconBrandStorytel,
  },
  
  {
    name: "FAQ",
    description: "See if your question has been answered",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },

  
  {
    name: "Contact Us",
    description: "Contact us if any problems ",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "News",
    description: "Check the latest new of the market",
    href: "#",
    icon: IconNews,
  },


];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between  align-middle lg:px-4  h-8 p-8 text-white "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="src\assets\logo-color.png" className="h-9 w-9" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? null:
            <Bars3Icon aria-hidden="true" className="h-6 w-6  " /> }
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-2 ">
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4  ">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-200 "
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50  group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6  text-black  "
                      />
                    </div>
                    <div className="flex-auto ">
                      <a
                        href={item.href}
                        className="block  text-gray-900 font-bold"
                      >
                        {item.name}
                        <span className="absolute inset-0 " />
                      </a>
                      <p className="mt-1  text-black font- ">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-2 ">
              Tools
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4  ">
                {tools.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-200 "
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6  text-gray-600 "
                      />
                    </div>
                    <div className="flex-auto ">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0 " />
                      </a>
                      <p className="mt-1  text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-2 ">
              Learn
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4  ">
                {learn.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6  text-gray-600 "
                      />
                    </div>
                    <div className="flex-auto ">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0 " />
                      </a>
                      <p className="mt-1  text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative  ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-2 ">
              About
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in "
            >
              <div className="p-4  ">
                {about.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6  text-gray-600 "
                      />
                    </div>
                    <div className="flex-auto ">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0 " />
                      </a>
                      <p className="mt-1  text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                
              </div>
            </PopoverPanel>
          </Popover>
          
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5  text-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-3/5 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
