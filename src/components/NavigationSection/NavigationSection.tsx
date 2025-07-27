import {Fragment, useState} from 'react'
import {
    Description,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {SearchIcon, ChevronDownIcon, Tv} from "lucide-react";
import {InputSearch} from "../ui/input";
import {
    SquaresPlusIcon,
    Bars3BottomLeftIcon,
    FireIcon,
    TrophyIcon,
    LightBulbIcon,
    TvIcon
} from '@heroicons/react/24/outline'

const navigation = {
    bestSeller: [
        {
            id: 'Products Best Seller',
            name: 'Products Best Seller',
            featured: [
                {
                    name: 'Lamp Learn',
                    href: '#',
                    imageSrc: '/img-4.svg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                    icon: SquaresPlusIcon
                }
            ]
        }
    ],
    categories: [
        {
            id: 'Products',
            name: 'Products',
            items: [
                {
                    name: 'All',
                    href: '/Product',
                    icon: Bars3BottomLeftIcon,
                    description: "Semua produk terbaik"
                }, {
                    name: 'Best Seller',
                    href: '#',
                    icon: FireIcon,
                    description: "Produk terbaik untuk anda"
                }, {
                    name: 'Sofa',
                    href: '#',
                    icon: TrophyIcon,
                    description: "Semua sofa terbaik"
                }, {
                    name: 'Hinging Light',
                    href: '#',
                    icon: LightBulbIcon,
                    description: "Semua Hinging terbaik"
                }, {
                    name: 'Chair',
                    href: '#',
                    icon: SquaresPlusIcon,
                    description: "Semua Coucc terbaik"
                }, {
                    name: 'Desk',
                    href: '#',
                    icon: TvIcon,
                    description: "Semua desk terbaik"
                }
            ]
        }
    ],
    pages: [
        {
            name: 'Blog',
            href: '#'
        }, {
            name: 'About us',
            href: '#'
        }
    ]
}

export const NavigationSection = () : JSX.Element => {
    const [open,
        setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"/>
                <div className="fixed inset-0 z-40 flex justify-self-end">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full">
                        <div className="flex px-4 pt-5 pb-2 justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            {/* Search */}
                            <div className="flex lg:ml-6 border-b border-neutral-300 ml-4 mr-4 mb-8">
                                <div className="flex items-center gap-3 px-0 py-2">
                                    <SearchIcon className="w-5 h-5"/>
                                    <div className="">
                                        <InputSearch
                                            className="border-none p-0 h-auto font-h3-16-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 ml-2"
                                            placeholder="Search"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border-none border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation
                                        .bestSeller
                                        .map((category) => (
                                            <Tab
                                                key={category.name}
                                                className="flex-1 border-none border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600">
                                                {category.name}
                                            </Tab>
                                        ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation
                                    .bestSeller
                                    .map((bestSell) => (
                                        <TabPanel key={bestSell.name} className="space-y-10 px-4 pt-2 pb-8">
                                            <div className="grid grid-cols-1 gap-x-4">
                                                {bestSell
                                                    .featured
                                                    .map((item) => (
                                                        <div key={item.name} className="group relative text-sm">
                                                            <img
                                                                alt={item.imageAlt}
                                                                src={item.imageSrc}
                                                                className="aspect-square w-[200px] h-[200px] rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                                                            <div className="flex flex-col items-center">
                                                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                    <span aria-hidden="true" className="absolute inset-0 z-10"/> {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            {navigation
                                                .categories
                                                .map((section) => (
                                                    <div key={section.name}>
                                                        <p
                                                            id={`${bestSell.id}-${section.id}-heading-mobile`}
                                                            className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${bestSell.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6">
                                                            {section
                                                                .items
                                                                .map((item) => (
                                                                    <li key={item.name} className="flow-root">
                                                                        <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                        </TabPanel>
                                    ))}
                            </TabPanels>

                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation
                                .pages
                                .map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                    Sign in
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                    Create account
                                </a>
                            </div>
                        </div>

                        {/* <div className="border-t border-gray-200 px-4 py-6">
                            <a href="#" className="-m-2 flex items-center p-2">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                                    className="block h-auto w-5 shrink-0"/>
                                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div> */}
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Website menu */}
            <header className="relative bg-white">
                <p
                    className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Dapatkan pengiriman gratis untuk pesanan
                </p>

                <nav aria-label="Top" className="px-4 sm:px-6 container mx-auto">
                    <div className="border-none border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Logo */}
                            <div className="flex lg:ml-0">
                                <a href="/">
                                    <span className="sr-only">Furnitura</span>
                                    <img alt="" src="/logo.svg?color=indigo&shade=600" className="h-8 w-auto"/>
                                </a>
                            </div>

                            {/* Search */}
                            <div className="flex lg:ml-6 border-b border-neutral-300 hidden lg:block">
                                <div className="flex items-center gap-3 px-0 py-2">
                                    <SearchIcon className="w-5 h-5"/>
                                    <div className="">
                                        <InputSearch
                                            className="border-none p-0 h-auto font-h3-16-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 ml-2"
                                            placeholder="Search"/>
                                    </div>
                                </div>
                            </div>

                            {/* Flyout menus */}
                            <div className="ml-[110px] flex items-center">
                                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-12">
                                        <a
                                            key="home"
                                            href="/"
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Home
                                        </a>
                                        {navigation
                                            .categories
                                            .map((category) => (
                                                <Popover key={category.id} className="relative">
                                                    <PopoverButton
                                                        className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600 focus:outline-none focus:ring-0">
                                                        {category.name}
                                                        {/* <ChevronDownIcon aria-hidden="true" className="size-5" /> */}
                                                    </PopoverButton>

                                                    <PopoverPanel
                                                        className="absolute left-1/2 z-50 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                                        <div
                                                            className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                                                            <div className="p-4">
                                                                {category
                                                                    .items
                                                                    .map((item) => (
                                                                        <div
                                                                            key={item.name}
                                                                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                                            <div
                                                                                className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                                <item.icon className="size-6 text-gray-600 group-hover:text-indigo-600"/>
                                                                            </div>
                                                                            <div>
                                                                                <a href={item.href} className="font-semibold text-gray-900">
                                                                                    {item.name}
                                                                                    <span className="absolute inset-0"/>
                                                                                </a>
                                                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </PopoverPanel>
                                                </Popover>
                                            ))}
                                        {navigation
                                            .pages
                                            .map((page) => (
                                                <a
                                                    key={page.name}
                                                    href={page.href}
                                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    {page.name}
                                                </a>
                                            ))}
                                    </div>
                                </PopoverGroup>
                            </div>
                            <div className="ml-auto flex items-center">
                                <div
                                    className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200"/>
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Create account
                                    </a>
                                </div>

                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img
                                            alt=""
                                            src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                                            className="block h-auto w-5 shrink-0"/>
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div> */}

                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon aria-hidden="true" className="size-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
