# AtCoder Beginner Contest 053
## B - A to Z String
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int left = 0;
    while (s[left] != 'A') {
        left++;
    }

    int right = s.size() - 1;
    while (s[right] != 'Z') {
        right--;
    }

    cout << (right - left + 1) << endl;
}
```
