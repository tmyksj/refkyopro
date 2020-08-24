# AtCoder Beginner Contest 023
## B - 手芸王
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int res = 0;
    string t = "b";
    while (t.size() < s.size()) {
        res++;

        if (res % 3 == 0) {
            t = "b" + t + "b";
        } else if (res % 3 == 1) {
            t = "a" + t + "c";
        } else {
            t = "c" + t + "a";
        }
    }

    if (t == s) {
        cout << res << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
