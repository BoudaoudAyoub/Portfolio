export default function download(
    filepath: string, 
    fileNewName: string,
    extentionType: string
) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = fileNewName.concat('.', extentionType);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href)
      a.remove()
    }, 200)
}