import { Box, Drawer, ModalClose, Stack, Typography } from "@mui/joy";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import { AboutMeSections } from "./FakeDb";
import EmbedIG from "./EmbedIG";

export default function DrawerAboutMe({ open, toggleDrawer }) {
	const AMS = AboutMeSections;
	return (
		<Drawer open={open} onClose={toggleDrawer(false)} size="lg">
			<ModalClose position="sticky" top={0} />
			<Box p={2}>
				<Stack spacing={2} direction="row" alignItems="center">
					<ContactsOutlinedIcon />
					<Typography variant="h4">About Me</Typography>
				</Stack>
				<Box my={2} maxWidth={513} mx="auto">
					<Stack spacing={2} overflow="auto">
						{AMS.map((section, index) => (
							<Typography key={index} variant="body1">
								<span className="noto-emoji">
									{section.emoji}{" "}
								</span>
								{section.text}
							</Typography>
						))}
						<EmbedIG />
					</Stack>
				</Box>
			</Box>
		</Drawer>
	);
}
