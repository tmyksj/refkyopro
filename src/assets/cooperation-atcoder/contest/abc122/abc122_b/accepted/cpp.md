# AtCoder Beginner Contest 122
## B - ATCoder
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int max_len = 0;
    for (int i = 0, l = 0; i < static_cast<int>(s.size()); i++) {
        if (s[i] == 'A' || s[i] == 'C' || s[i] == 'G' || s[i] == 'T') {
            if (max_len < i - l + 1) {
                max_len = i - l + 1;
            }
        } else {
            l = i + 1;
        }
    }

    cout << max_len << endl;
}
```
