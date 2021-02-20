import java.util.ArrayList;
import java.util.List;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

/**
 * @author CaoRui
 */
public class GetWinSpotlightPic {

  public static void main(String[] args) {
    File dir = new File("./flower/img");
    if(dir.exists() && dir.isDirectory()){
      File[] sons = dir.listFiles();
      for(File son : sons){
        String name = son.getName();
        List<String> sonFileName = getFileList(son);
        if(sonFileName != null && sonFileName.size() > 0){
          readAndWriteJs(name, sonFileName);
        }
      }
    }
  }

  public static List<String> getFileList(File dir){
    List<String> fileNames = new ArrayList<String>();
    if(dir.exists() && dir.isDirectory()){
      File[] files = dir.listFiles();
      for(File file : files){
        fileNames.add(file.getName());
      }
    }
    return fileNames;
  }

  public static void readAndWriteJs(String name, List<String> filesName){
    File file = new File("./flower/js/" + name + ".js");
    StringBuffer sbf = new StringBuffer();
    if(file.exists()){
      try (BufferedReader reader = new BufferedReader(new FileReader(file));){
          String tempStr;
          while ((tempStr = reader.readLine()) != null) {
              sbf.append(tempStr);
              sbf.append("\n");
          }
          reader.close();
      } catch (Exception e) {
          e.printStackTrace();
      }
    }
    String oldJs = sbf.toString();
    StringBuffer newsbf = new StringBuffer();
    for(String fname : filesName){
      if(oldJs.contains("fname:\"" + fname + "\"")){
        continue;
      }
      newsbf.append("  {\n"
        + "    name:\"" + fname+"-new" + "\",\n"
        + "    code:\"" + fname.replaceAll(".jpg", "") + "\",\n"
        + "    price:\"--\",\n"
        + "    pic:\"./img/" + name + "/" + fname + "\",\n"
        + "    remark:\"描述\",\n"
        + "    fname:\"" + fname + "\"\n"
        + "  },\n"
      );
    }
    String newStr = newsbf.toString().replaceAll(",$", "") + "]";
    oldJs = oldJs.replaceAll("\n]$", ",\n" + newStr);
    try {
      BufferedWriter out = new BufferedWriter(new FileWriter("./flower/js/" + name + ".js"));
      out.write(oldJs);
      out.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
