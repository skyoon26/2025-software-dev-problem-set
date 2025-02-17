package leetcode;

import java.util.HashSet;

public class ContainsDuplicate {

    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> seenNums = new HashSet<>();

        for (int num : nums) {
            if (seenNums.contains(num)) {
                return true; // Duplicate number found
            }
            seenNums.add(num); // Non-duplicate number is added to the set
        }
        return false; // Loop complete and no duplicate number found
    }

}
