<#
    .SYNOPSIS
    This script recursively looks through every sub-directory for
    PDFs, extracting the images within using GhostScript and then
    adding them to a CBZ archive for comics.

    Only use this in directories with PDF comics if you'd like
    to avoid unexpected CBZ archives being created.

    .EXAMPLE
    powershell -ExecutionPolicy Bypass .\cbz-archiver.ps1
    powershell -ep bypass .\cbz-archiver.ps1

    .PARAMETER Ghostscript
    This specifies the installation path to Ghostscript.
    Remember to change this to match your version and path!

    .PARAMETER 7zip
    This specifies the installation path to 7-Zip.

    .NOTES
    Created: 2023-10-02

    Thanks to reddit/r/ooglaabpc for the original code.
    Source: https://old.reddit.com/r/humblebundles/comments/16ecfvl/humble_book_bundle_halo_graphic_novels_by_dark/k0ducxi/

    You can modify the "-Path" value to someting specific in
    the Get-ChildItem loop if you'd like. Currently, it'll
    just start from the directory from which this script
    file is run.

    Do note that there isn't any handling for if files
    already exists, so if they do, the script will exit.
    It's not hard to add if you need that sort of thing
    though.

    As you can see, there's two lines for WinRAR commented
    out. I personally prefer 7-Zip, but if you'd like WinRAR
    instead, you'll just need to comment the two 7-Zip lines
    and uncomment the WinRAR lines. I haven't personally
    tested them, but I think it should work just fine.

    Also, as an aside, I so wish the developers of CLI tools
    didn't go for concatenated argument switches and values,
    I just want to take advantage of array literals. :'(
#>

# Variables
$GhostscriptPath = "C:/Program Files/ghostscript/gs10.02.0/bin/gswin64c"
$7zipPath = "C:/Program Files/7-Zip/7z.exe"
#$WinRARPath = "C:/Program Files/WinRAR/WinRAR.exe"

# Write the current file to the terminal.
Write-Host "Starting processing. Files will appear here when they're completed."
Get-ChildItem -Path . -Filter *.pdf -Recurse | ForEach-Object {
    $PDFFilePath = $_.FullName
    $PDFFolder = $_.DirectoryName
    $PDFBaseName = $_.BaseName

    try {
        # Write processing status to the terminal.
        Write-Host -NoNewline "$PDFBaseName.pdf is processing... "

        # Extracts images in JPG format from target PDF.
        & $GhostscriptPath -dNOPAUSE -sDEVICE=jpeg -sOutputFile="$PDFFolder\$PDFBaseName"-page-%03d.jpg -r300x300 -dJPEGQ=90 -dUseCropBox -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -q $PDFFilePath -c quit
            
        # Compress JPEGs into ZIP (The "> NUL:" is just to make the command silent).
        & $7zipPath a -tzip -mx=0 "$PDFFolder\$PDFBaseName.zip" "$PDFFolder\$PDFBaseName*.jpg"
        #& $WinRARPath a -afzip -m0 "$pdfFolder\$baseName.zip" "$pdfFolder\$baseName*.jpg"

        # Change file extention ZIP to CBZ.
        Rename-Item -Path "$PDFFolder\$PDFBaseName.zip" -NewName "$PDFFolder\$PDFBaseName.cbz"

        # Delete the JPG files.
        Remove-Item -Path "$PDFFolder\$PDFBaseName*.jpg"

        # Write processing completion status to the terminal.
        Write-Host -NoNewline "$PDFBaseName.pdf is processing... "
        Write-Host "OK!" -ForegroundColor Green
    } catch {
        Write-Error "An error occurred: $_. Exception type: $($_.GetType().FullName)"
    }
}