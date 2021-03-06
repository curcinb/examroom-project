USE [master]
GO
/****** Object:  Database [examroomdb]    Script Date: 22-Nov-21 7:07:14 PM ******/
CREATE DATABASE [examroomdb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'examroomdb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\examroomdb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'examroomdb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\examroomdb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [examroomdb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [examroomdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [examroomdb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [examroomdb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [examroomdb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [examroomdb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [examroomdb] SET ARITHABORT OFF 
GO
ALTER DATABASE [examroomdb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [examroomdb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [examroomdb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [examroomdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [examroomdb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [examroomdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [examroomdb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [examroomdb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [examroomdb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [examroomdb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [examroomdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [examroomdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [examroomdb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [examroomdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [examroomdb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [examroomdb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [examroomdb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [examroomdb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [examroomdb] SET  MULTI_USER 
GO
ALTER DATABASE [examroomdb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [examroomdb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [examroomdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [examroomdb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [examroomdb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [examroomdb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [examroomdb] SET QUERY_STORE = OFF
GO
USE [examroomdb]
GO
/****** Object:  Table [dbo].[Candidate]    Script Date: 22-Nov-21 7:07:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Candidate](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[EmailId] [nvarchar](50) NOT NULL,
	[PhoneNumber] [varchar](15) NULL,
	[AddressLine1] [nvarchar](200) NULL,
	[AddressLine2] [nvarchar](200) NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_Candidate] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [EmailId_Candidate] UNIQUE NONCLUSTERED 
(
	[EmailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Form]    Script Date: 22-Nov-21 7:07:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Form](
	[Id] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_Form] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormAction]    Script Date: 22-Nov-21 7:07:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormAction](
	[Id] [int] NOT NULL,
	[CandidateId] [int] NOT NULL,
	[FormId] [int] NOT NULL,
	[Action] [varchar](80) NULL,
	[ActionOn] [datetime] NULL,
 CONSTRAINT [PK_FormAction] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubmittedForm]    Script Date: 22-Nov-21 7:07:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubmittedForm](
	[Id] [int] NOT NULL,
	[CandidateName] [varchar](50) NOT NULL,
	[EmailId] [nvarchar](50) NOT NULL,
	[PhoneNumber] [varchar](15) NULL,
	[IdForm] [int] NOT NULL,
	[FormName] [varchar](50) NOT NULL,
	[FormStatus] [varchar](50) NOT NULL,
 CONSTRAINT [PK_FormStatus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FormAction]  WITH CHECK ADD  CONSTRAINT [FK_Candidate_FormAction] FOREIGN KEY([CandidateId])
REFERENCES [dbo].[Candidate] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FormAction] CHECK CONSTRAINT [FK_Candidate_FormAction]
GO
ALTER TABLE [dbo].[FormAction]  WITH CHECK ADD  CONSTRAINT [FK_Form_FormAction] FOREIGN KEY([FormId])
REFERENCES [dbo].[Form] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FormAction] CHECK CONSTRAINT [FK_Form_FormAction]
GO
ALTER TABLE [dbo].[SubmittedForm]  WITH CHECK ADD  CONSTRAINT [FK_Form_FormStatus] FOREIGN KEY([IdForm])
REFERENCES [dbo].[Form] ([Id])
GO
ALTER TABLE [dbo].[SubmittedForm] CHECK CONSTRAINT [FK_Form_FormStatus]
GO
ALTER TABLE [dbo].[SubmittedForm]  WITH CHECK ADD  CONSTRAINT [FK_FormStatus_FormStatus_Mail] FOREIGN KEY([EmailId])
REFERENCES [dbo].[Candidate] ([EmailId])
GO
ALTER TABLE [dbo].[SubmittedForm] CHECK CONSTRAINT [FK_FormStatus_FormStatus_Mail]
GO
USE [master]
GO
ALTER DATABASE [examroomdb] SET  READ_WRITE 
GO
INSERT INTO [dbo].[Candidate]
           ([Id]
           ,[Name]
           ,[EmailId]
           ,[PhoneNumber]
           ,[AddressLine1]
           ,[AddressLine2]
           ,[Active])
     VALUES
           (1, 'Pera', 'pera@gmail.com', '+38162405202', 'Belicka 27', 'Belicka 35',1)
GO

INSERT INTO [dbo].[Candidate]
           ([Id]
           ,[Name]
           ,[EmailId]
           ,[PhoneNumber]
           ,[AddressLine1]
           ,[AddressLine2]
           ,[Active])
     VALUES
           (2, 'Zika', 'zika@gmail.com', '+3816234114', 'Belicka 2', 'Belicka 22',0)
GO

INSERT INTO [dbo].[Candidate]
           ([Id]
           ,[Name]
           ,[EmailId]
           ,[PhoneNumber]
           ,[AddressLine1]
           ,[AddressLine2]
           ,[Active])
     VALUES
           (3, 'Mika', 'mika@gmail.com', '+3139151874', 'Belickad 23', 'Belcikca 13',1)
GO

INSERT INTO [dbo].[Form]
           ([Id]
           ,[Name]
           ,[Active])
     VALUES
		   (1, 'Form1', 1)
GO
INSERT INTO [dbo].[Form]
           ([Id]
           ,[Name]
           ,[Active])
     VALUES
		   (2, 'Form2', 0)
GO
INSERT INTO [dbo].[Form]
           ([Id]
           ,[Name]
           ,[Active])
     VALUES
		   (3, 'Form3', 1)
GO

INSERT INTO [dbo].[Form]
           ([Id]
           ,[Name]
           ,[Active])
     VALUES
		   (4, 'Form4', 0)
GO

INSERT INTO [dbo].[Form]
           ([Id]
           ,[Name]
           ,[Active])
     VALUES
		   (5, 'Form5', 1)
GO
INSERT INTO [dbo].[SubmittedForm]
           ([Id]
           ,[CandidateName]
           ,[EmailId]
           ,[PhoneNumber]
           ,[IdForm]
           ,[FormName]
           ,[FormStatus])
     VALUES
		   (1, 'Pera', 'pera@gmail.com', '123', 1, 'Form1', 'Pending')
GO
INSERT INTO [dbo].[SubmittedForm]
           ([Id]
           ,[CandidateName]
           ,[EmailId]
           ,[PhoneNumber]
           ,[IdForm]
           ,[FormName]
           ,[FormStatus])
     VALUES
		   (2, 'Pera', 'pera@gmail.com', '123', 3, 'Form3', 'Accepted')
GO
INSERT INTO [dbo].[SubmittedForm]
           ([Id]
           ,[CandidateName]
           ,[EmailId]
           ,[PhoneNumber]
           ,[IdForm]
           ,[FormName]
           ,[FormStatus])
     VALUES
		   (3, 'Mika', 'mika@gmail.com', '456', 5, 'Form5', 'Pending')
GO

INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (1, 1, 1, 'Reviewer 1', '2021-11-22 18:00:00.000')
GO

INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (2, 1, 3, 'Reviewer 1', '2021-11-22 18:10:00.000')
GO
INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (3, 1, 3, 'Reviewer 2', '2021-11-22 18:20:00.000')
GO
INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (4, 1, 3, 'Reviewer 3', '2021-11-22 18:30:00.000')
GO
INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (5, 1, 3, 'Reviewer 4', '2021-11-22 19:40:10.000')
GO
INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (6, 3, 5, 'Reviewer 1', '2021-11-22 18:40:00.000')
GO
INSERT INTO [dbo].[FormAction]
           ([Id]
           ,[CandidateId]
           ,[FormId]
           ,[Action]
           ,[ActionOn])
     VALUES
		   (7, 3, 5, 'Reviewer 2', '2021-11-23 15:26:11.880')
GO

