var examQuest = [];

examQuest[0] = {
question: "Makes a directory in the specified path. If you don't specify a path, the directory will be created in your current directory.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Target:{Computer | User}",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mkdir /target",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MD [drive:][path]",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CD [drive:][path]",
answer: "C"
 };

 examQuest[1] = {
question: "how do you auto complete a file name in command prompt while typing",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press tab",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press alt",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press down arrow",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press Enter",
answer: "A"
 };
 
 examQuest[2] = {
question: "SFC switch that Scans integrity of all protected system files and repairs files with problems when possible.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCANOS",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCAN",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SFC SCAN",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCANNOW",
answer: "D"
 };
 
 examQuest[03] = {
question: "MKDIR",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creates directories, but you must create each directory individually.",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifies the location and/or name of new files.",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creates any intermediate directories in the path, if needed.",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Read only",
answer: "C"
 };
 
 examQuest[04] = {
question: "Creates directories, but you must create each directory individually.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MKDIR",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MD",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CD",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIR",
answer: "B"
 };
 
 examQuest[05] = {
question: "An extension of the FAT filesystem that was introduced with Windows 95. It augmented the 8.3 file-naming convention and allowed filenames with up to 255 characters. It created two names for each file: a long name and an 8.3-compatible name so that older programs could still access files. When this was incorporated into Windows 95, it used 32-bit code for improved disk access while keeping the 16-bit naming system for backward compatibility with FAT. It also had the 2GB disk partition limitation.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File Allocation Table (FAT)",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Technology File System (NTFS)",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual FAT (VFAT)",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CDFS",
answer: "C"
 };
 
 examQuest[06] = {
question: "This filesystem was introduced along with Windows 95 OEM Service Release 2. Because of a need to be able to format a partition larger than 2GB, this new one was based more on VFAT than on FAT16. It allowed for 32-bit cluster addressing, which in turn provided for a maximum partition size of 2 terabytes (2048GB). It also included smaller cluster sizes to avoid wasted space. Support is included in current Windows versions.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NTFS",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAText",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VFAT",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAT32",
answer: "D"
 };
 
 examQuest[07] = {
question: "GPUPDATE switch for doing restart after Group Policy updates are applied?",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Boot",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Restart",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Shutdown",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Reboot",
answer: "A"
 };
 
 examQuest[08] = {
question: "SFC switch that Scans integrity of all protected system files. No repair operation is performed.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/VERIFYONLY",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/READONLY",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/VERIFY",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/FIXBOOT",
answer: "A"
 };
 
 examQuest[09] = {
question: "chkdsk switch that fixes errors on the disk.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/R",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/A",
answer: "A"
 };
 
 examQuest[10] = {
question: "XCOPY switch that Specifies the file(s) to copy.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;destination",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dir",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from",
answer: "A"
 };
 
 examQuest[11] = {
question: "XCOPY switch that Specifies the location and/or name of new files.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;destination",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dir",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to",
answer: "B"
 };
 
 examQuest[12] = {
question: "chkdsk switch that Displays the full path and name of every file on the disk. (on FAT or FAT32)",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/f",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/a",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/v",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/r",
answer: "C"
 };
 
 examQuest[13] = {
question: "GPUPDATE switch that Specifies that only User or only Computer policy settings are updated. By default, both User and Computer policy settings are updated.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Update:{Computer | User}",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Target:{Computer | User}",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Destination:{Computer | User}",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/GPUPDATE:{Computer | User}",
answer: "B"
 };

 examQuest[14] = {
question: "Quits the CMD.EXE program (command interpreter) or the current batch script.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXIT",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QUIT",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STOP",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TERMINATE",
answer: "A"
 };
 
 examQuest[15] = {
question: "FORMAT switch that Forces the volume to dismount first if necessary.  All opened handles to the volume would no longer be valid.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/f",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/d",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/x",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/v",
answer: "C"
 };
 
 examQuest[16] = {
question: "Scans integrity of the referenced file, repairs file if problems are . Specify full path <file>",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCANNOW",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCANFILE",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCANOS",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/SCAN",
answer: "B"
 };
 
  examQuest[17] = {
question: "GPUPDATE switch that Reapplies all policy settings. By default, only policy settings that have changed are applied.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Force",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Prompt",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Update",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
answer: "A"
 };
 
examQuest[18] = {
question: "ROBOCOPY switch that copies Subdirectories, but not empty ones.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/A",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
answer: "A"
 };

  examQuest[19] = {
question: "EXIT switch that specifies to exit the current batch script instead of CMD.EXE.  If executed from outside a batch script, it will quit CMD.EXE",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/R",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/B",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
answer: "C"
 };
 
  examQuest[20] = {
question: "chkdsk switch that Locates bad sectors and recovers readable information (implies /F, when /scan not specified).",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/s",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/f",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/a",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/r",
answer: "D"
 };
 
  examQuest[21] = {
question: "FORMAT switch that Performs a quick format. Note that this switch overrides /P.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Q",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/R",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
answer: "B"
 };
 
  examQuest[22] = {
question: "Expands one or more compressed files.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPRESS",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXTEND",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPAND",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DECOMPRESS",
answer: "C"
 };
 
  examQuest[23] = {
question: "GPUPDATE switch that Causes the next foreground policy application to be done synchronously.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Async",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Synchronous",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Sync",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Foreground",
answer: "C"
 };
 
  examQuest[24] = {
question: "XCOPY switch that Copies only files with the archive attribute set, doesn't change the attribute.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/B",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/V",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/A",
answer: "D"
 };
 
  examQuest[25] = {
question: "EXIT switch that specifies a numeric number.  if /B is specified, sets ERRORLEVEL that number.  If quitting CMD.EXE, sets the process exit code with that number.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stop",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quit",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stopnow",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exitCode",
answer: "D"
 };
 
examQuest[26] = {
question: "chkdsk switch that runs an online scan on the volume (NTFS only)",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/scan",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/scanos",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/scanfile",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/scanall",
answer: "A"
 };
 
examQuest[27] = {
question: "FORMAT switch in which Files created on the new volume will be compressed by default. (NTFS only)",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/V",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/R",
answer: "B"
 };
 
examQuest[28] = {
question: "Provides help information for Windows commands",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F1",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INFO",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TASKLIST",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HELP",
answer: "D"
 };

examQuest[29] = {
question: "XCOPY switch that prompts you before creating each destination file.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/Y",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/V",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/P",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
answer: "C"
 };
 
examQuest[30] = {
question: "ROBOCOPY switch that copies subdirectories, including Empty ones.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/E",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/R",
answer: "B"
 };
 
examQuest[31] = {
question: "EXPAND option to Rename expanded files.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- S",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- R",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- E",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- F",
answer: "B"
 };
 
examQuest[32] = {
question: "FORMAT switch Zero every sector on the volume. After that, the volume will be overwritten 'count' times using a different random number each time.  If 'count' is zero, no additional overwrites are made after zeroing every sector.  This switch is ignored when /Q is specified.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/T:count",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/E:count",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/V:count",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/P:count",
answer: "D"
 };
 
examQuest[33] = {
question: "XCOPY switch that Copies directories and subdirectories except empty ones.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/T",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/F",
answer: "B"
 };
 
examQuest[34] = {
question: "disk partition utility that operates using the command line",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEFRAG",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHKDSK",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DISKPART",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FORMAT",
answer: "C"
 };
 
examQuest[35] = {
question: "Makes snapshots that can be reverted back to",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shadow Copy",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restore Point",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Recovery",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Restore",
answer: "A"
 };
 
examQuest[36] = {
question: "Allows restore of system files and settings",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shadow Copy",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Restore",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Backup Manager",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restore Point",
answer: "B"
 };
 
examQuest[37] = {
question: "Use removable drive as cache",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed Boost",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ready Boost",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flash Memory",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual Memory",
answer: "B"
 };
 
examQuest[38] = {
question: "Vertical bar for holding gadgets. Only available in Windows Vista.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sidebar",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charms",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widgets",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Bar",
answer: "A"
 };
 
examQuest[39] = {
question: "Allows legacy programs to run",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Backwards Compatible Mode",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Atari 2600",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPRESULT",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compatibility mode",
answer: "D"
 };
 
examQuest[40] = {
question: "Allows older programs to think they are running on Windows XP. Not available in Windows 8.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compatibility mode",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual Windows 7 Mode",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual XP mode",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Administrative Tools",
answer: "C"
 };
 
examQuest[41] = {
question: "Transfer data files from one OS to another",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Backup Assistant",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Easy Transfer",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Transfer Manager",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Safe transfer",
answer: "B"
 };
 
examQuest[42] = {
question: "This command line tool displays the Resultant Set of Policy (RSoP) information for a target user and computer.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INFO",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADGROUP",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RSOP",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPRESULT",
answer: "D"
 };
 
examQuest[43] = {
question: "Allows administrative tasks to be run on the computer",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Administrative Tools",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Manager",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Manager",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sysprep",
answer: "A"
 };

examQuest[44] = {
question: "Default graphical interface for Windows Vista and Windows 7.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metro UI",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angular",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aero",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modern UI",
answer: "C"
 };

examQuest[45] = {
question: "GPRESULT switch that Specifies the remote system to connect to.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C",
answer: "A"
 };

examQuest[46] = {
question: "What does Windows Defender do?",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blocks unwanted traffic",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allows configuration of security related items",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looks for Malware",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filters outgoing traffic",
answer: "C"
 };

examQuest[47] = {
question: "Blocks unwanted traffic",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows Defender",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MacAfee",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Security Center",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows Firewall",
answer: "D"
 };
 
examQuest[48] = {
question: "GPRESULT switch that Specifies the user context under which the command should run.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/S",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/C",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/U",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/V",
answer: "C"
 };
 
examQuest[49] = {
question: "Allows configuration of security related items. Became Action Center after Windows Vista.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows Defender",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Security Center",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Network and Security Settings",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows Firewall",
answer: "B"
 };
 
examQuest[50] = {
question: "Event Viewer",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allows scheduling of tasks",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allows viewing of services",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allows viewing of the log files",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allows administrative command line instructions",
answer: "C"
 };
 
examQuest[51] = {
question: "Mini programs created for Vista. Still available with other OSes but degraded.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Applets",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gadgets",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Widgets",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charms",
answer: "B"
 };
 
examQuest[52] = {
question: "GPRESULT switch that Specifies the password for the given user context. Prompts for input if omitted.",
choicea: "A. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V",
choiceb: "B. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P",
choicec: "C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S",
choiced: "D. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O",
answer: "B"
 };
 
 
 



