-- CreateTable
CREATE TABLE `mahasiswa` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `npm` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `mahasiswa_id_key`(`id`),
    UNIQUE INDEX `mahasiswa_npm_key`(`npm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('super_admin', 'admin') NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
