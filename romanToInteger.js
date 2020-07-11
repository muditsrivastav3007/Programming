public class Solution {
    public int RomanToInt(string s) {
        int result = 0;        
        Dictionary<char, int> dict = new Dictionary<char, int>();
        dict.Add('I', 1);
        dict.Add('V', 5);
        dict.Add('X', 10);
        dict.Add('L', 50);
        dict.Add('C', 100);
        dict.Add('D', 500);
        dict.Add('M', 1000);        

        int i=0;
        while(i < s.Length)
        {
            if(i+1 < s.Length && dict[s[i]] < dict[s[i+1]])
            {
                result -= dict[s[i]];
            }
            else
            {
                result += dict[s[i]];
            }
            i++;
        }
        return result;
    }
}