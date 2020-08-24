# AtCoder Beginner Contest 147
## B - Palindrome-philia
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 0;
    for (int i = 0; i < static_cast<int>(s.size()) / 2; i++) {
        if (s[i] != s[s.size() - i - 1]) {
            res++;
        }
    }

    cout << res << endl;
}
```
