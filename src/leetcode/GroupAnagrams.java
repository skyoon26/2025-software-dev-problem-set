package leetcode;

import java.util.*;

public class GroupAnagrams {

    public List<List<String>> groupAnagrams(String[] strs) {

        // Key: sorted version of a word, Value: a list of words that match the sorted key
        Map<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            // Convert the string into a character array (str -> [s, t, r])
            char[] chars = str.toCharArray();

            // Sort the characters to create a unique key for anagrams ([s, t, r] -> [r, s, t])
            Arrays.sort(chars);

            // Convert the sorted character array back into a string ([r, s, t] -> rst)
            String sortedStr = new String(chars);

            // If the sorted version doesn't exist in the map, create a new list
            if (!map.containsKey(sortedStr)) {
                map.put(sortedStr, new ArrayList<>());
            }

            // Add the original word to its anagram group
            map.get(sortedStr).add(str);
        }

        // Convert the map values into a list of anagram groups and return
        return new ArrayList<>(map.values());
    }

}
