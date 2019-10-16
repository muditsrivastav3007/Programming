using System;
using System.Collections.Generic;
namespace Coding
{
    class Program
    {
        static void Main(string[] args)
        {
            string s="1abc23";
            string temp="";
            int sum=0;
            for(int i=0;i<s.Length;i++)
            {
                char ch=s[i];
                if(char.IsDigit(ch))
                {
                    temp+=ch;
                }
                else
                {
                    sum+=int.Parse(temp);
                    temp="0";
                }
            }
            sum=sum + int.Parse(temp); 
            Console.WriteLine(sum);
        }
    }
}
