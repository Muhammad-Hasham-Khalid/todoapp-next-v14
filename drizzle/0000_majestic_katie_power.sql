CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`completed` integer DEFAULT false NOT NULL,
	`created_at` integer NOT NULL
);
