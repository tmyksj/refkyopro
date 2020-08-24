# AtCoder Beginner Contest 172
## B - Minor Change
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    int res = 0;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if (s[i] != t[i]) {
            res++;
        }
    }

    cout << res << endl;
}
```
