package org.jncc.Utils;

import java.io.File;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by Lenovo on 2017/3/30.
 */
public class UtilTools {
    public String confirmTokenBuilder() {
        int mobile_code = (int) ((Math.random() * 9 + 1) * 100000);
        String cbuilder = mobile_code + "";
        return cbuilder;
    }

    private Date date;

    public UtilTools() {
        date = new Date();
    }

    public long getTimeStamp() {
        long nowTime;
        nowTime = date.getTime();
        nowTime /= 1000;
        return nowTime;
    }

    public Timestamp getTime() {
        Timestamp timestamp = new Timestamp(date.getTime());
        return timestamp;
    }

    public String idBuilder(int kind) {
        String res = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        int num = random.nextInt(res.length());
        StringBuilder id = new StringBuilder();
        id.append(kind);
        id.append(getTimeStamp());
        id.append(res.charAt(num));
        return id.toString();
    }

    public Integer toInteger(String s) {
        int x = s.charAt(1) - '0';
        int y = s.charAt(0) - '0';
        return y * 10 + x;
    }

    public List<Integer> phasePayedCourse(String payedCourse) {
        List<Integer> payedCoursesList = new ArrayList<Integer>();
        for (int i = 0; i < payedCourse.length(); i++) {
            payedCoursesList.add(toInteger(payedCourse.substring(i, i + 2)));
            i++;
        }
        return payedCoursesList;
    }

    /**
     * 待修正，目前默认一月30天
     *
     * @param monthNum 月数
     * @return
     */
    public Timestamp getMonthsLaterTime(int monthNum) {
        long timeTmp = 1;
        timeTmp *= monthNum;
        timeTmp *= 30;
        timeTmp *= 24;
        timeTmp *= 60;
        timeTmp *= 60;
        timeTmp *= 1000;
        return new Timestamp(date.getTime() + timeTmp);
    }

    public Timestamp getDaysLaterTime(int dayNum) {
        long timeTmp = 1;
        timeTmp *= dayNum;
        timeTmp *= 24;
        timeTmp *= 60;
        timeTmp *= 60;
        timeTmp *= 1000;
        return new Timestamp(date.getTime() + timeTmp);
    }

    public Timestamp getDaysBeforeTime(int dayNum) {
        long timeTmp = 1;
        timeTmp *= dayNum;
        timeTmp *= 24;
        timeTmp *= 60;
        timeTmp *= 60;
        timeTmp *= 1000;
        return new Timestamp(date.getTime() - timeTmp);
    }

    public static String fileNameBuilder(List<String> names, String originPath) {
        StringBuilder builder = new StringBuilder();
        builder.append(originPath.length()>0?originPath+";":"");
        for (String in : names) {
            builder.append(in);
            builder.append(";");
        }
        if (builder.length() > 0) {
            builder.deleteCharAt(builder.length() - 1);
        }
        return builder.toString();
    }

    public static List<String> splitFileName(String name) {
        List<String> data = new ArrayList<>();
        String[] names = name.split(";");
        for (String in : names) {
            data.add(in);
        }
        return data;
    }

    public static String format(Timestamp time) {
        if (time == null) {
            return null;
        }
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
        return sf.format(time);
    }

    /**
     * 获取目录下所有文件(按时间排序),返回最新修改的
     *
     * @param path
     * @return
     */
    public static File getFileSort(String path,String suffix) {
        List<File> list = getFiles(path, new ArrayList<File>());
        if (list != null && list.size() > 0) {
            Collections.sort(list, new Comparator<File>() {
                public int compare(File file, File newFile) {
                    if (file.lastModified() > newFile.lastModified()) {
                        return 1;
                    } else if (file.lastModified() == newFile.lastModified()) {
                        return 0;
                    } else {
                        return -1;
                    }

                }
            });
            for (File file : list) {
                String fileSuffix = file.getName().substring(file.getName().lastIndexOf(".") + 1);
                if (fileSuffix.equals(suffix)) break;
                else list.remove(file);
            }
            return list.get(0);
        } else return null;
    }

    /**
     * 获取目录下所有文件
     *
     * @param realpath
     * @param files
     * @return
     */
    public static List<File> getFiles(String realpath, List<File> files) {

        File realFile = new File(realpath);
        if (realFile.isDirectory()) {
            File[] subfiles = realFile.listFiles();
            for (File file : subfiles) {
                if (file.isDirectory()) {
                    getFiles(file.getAbsolutePath(), files);
                } else {
                    files.add(file);
                }
            }
        }
        return files;
    }
    /**
     * 判断事件是否为当天发生
     * @param timestamp
     * @return
     * @author ToMax
     */
    public static boolean checkIsInToday(Timestamp timestamp){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        return timestamp!=null?format.format(timestamp).equals(format.format(new Date())):false;
    }

    /**
     * 获取今天的开始时间
     * @return
     * @author ToMax
     */
    public static Timestamp getTodayBegTime(){
        String formatTime = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        formatTime += " 00:00:00";
        return Timestamp.valueOf(formatTime);
    }

    public static void main(String[] args) {
        System.out.println(getTodayBegTime());
    }
}
