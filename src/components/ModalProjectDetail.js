import { Sheet, Typography, ModalClose, Stack, Button } from "@mui/joy";
import { ListOfProjects, ListOfTechnologies } from "./FakeDb";
import Video from "./Video";
import Technology from "./Technology";
import { PlayArrow } from "@mui/icons-material";

export default function ModalProjectDetail({ name }) {
	const project = ListOfProjects.find((el) => el.name === name);
	const LOT = ListOfTechnologies;
	const technologies = project.technologies;

	return (
		<Sheet
			variant="outlined"
			sx={{
				minWidth: 300,
				borderRadius: "md",
				p: 3,
				maxWidth: 651,
				width: "100%",
			}}
		>
			<ModalClose variant="outlined" />
			<Typography
				component="h2"
				id="close-modal-title"
				level="h4"
				textColor="inherit"
				sx={{ fontWeight: "lg", paddingBottom: 2 }}
			>
				{project.name}
			</Typography>
			{project.video && (
				<Video link={project.video} projectName={project.name} />
			)}

			<Stack
				direction="row"
				spacing={1}
				sx={{
					alignItems: "start",
					pt: 2,
				}}
			>
				{technologies.map((technology) => (
					<Technology
						key={technology}
						name={technology}
						icon={LOT.find((el) => el.name === technology).icon}
					/>
				))}
			</Stack>

			<Typography level="body-md" sx={{ pb: 2 }}>
				{project.description}
			</Typography>

			<Stack direction="row" spacing={2}>
				<Button
					startDecorator={
						<img
							width="20"
							height="20"
							src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
						/>
					}
					variant="outlined"
					disabled={project.github ? false : true}
				>
					Github
				</Button>
				<Button
					startDecorator={<PlayArrow />}
					variant="soft"
					color="success"
					disabled={project.link ? false : true}
				>
					Live
				</Button>
			</Stack>
		</Sheet>
	);
}
