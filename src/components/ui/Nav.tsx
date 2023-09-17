import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	Input,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

// import { useSearch } from "../../hooks/useSearch";

interface NavProps {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ setSearch, setIsFocused }) => {
	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const [scrolled, setScrolled] = useState<boolean>(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 40) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	});

	return (
		<Navbar
			isBordered
			className={`${
				!scrolled ? "bg-transparent border-none backdrop-saturate-[-1]" : ""
			}`}
		>
			<NavbarContent>
				<NavbarBrand className="mr-4">
					<Link to="/" className="block font-bold text-inherit">
						ACME
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent as="div" className="items-center">
				<Input
					classNames={{
						base: "max-w-full  h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full w-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Type to search..."
					size="sm"
					onChange={(e) => setSearch(e.target.value)}
					onFocus={handleFocus}
					onBlur={handleBlur}
					startContent={<BiSearch size={18} />}
					type="search"
				/>
			</NavbarContent>
			<NavbarContent justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="logout" color="primary">
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};

export default Nav;
