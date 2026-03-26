#include <vector>
#include <utility> // for std::swap


using namespace std;


void reverseString(vector<char>& s) {
    int left = 0;
    int right = s.size() - 1;
   
    while (left < right) {
        // Built-in function to swap values in-place
        swap(s[left], s[right]);
       
        // Move pointers
        left++;
        right--;
    }
}
