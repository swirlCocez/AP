class Solution {
    public int jump(int[] nums) {
        int l = 0;
        int r = 0;
        int n = nums.length;
        int jumps = 0;
        int farthest = 0;
        while(r<n-1){
            for(int i=l;i<=r;i++){ //max distance far we could jump
                farthest = Math.max(nums[i]+i,farthest);
            }
            jumps++;
            l = r+1; //minimum it could jump
            r = farthest; //max it could jump
        }
        return jumps;
    }
}
