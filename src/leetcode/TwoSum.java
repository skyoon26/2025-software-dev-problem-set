package leetcode;

import java.util.HashMap;
import java.util.Map;

public class TwoSum {

    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // Create a HashMap to store numbers and their indices

        for (int i = 0; i < nums.length; i++) { // Iterate through the nums array
            int difference = target - nums[i]; // Calculate the difference to reach the target

            if (map.containsKey(difference)) { // Check if this difference exists in the HashMap
                return new int[]{map.get(difference), i}; // If found, return the indices of the difference and the current number
            }

            map.put(nums[i], i); // If the number doesn't exist in the HashMap, store the number and its index
        }

        return new int[]{}; // If there are no numbers that add up to target, then return an empty array
    }
}
