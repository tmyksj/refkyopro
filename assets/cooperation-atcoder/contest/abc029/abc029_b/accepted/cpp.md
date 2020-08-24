# AtCoder Beginner Contest 029
## B - カキ
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int res = 0;
    for (int i = 0; i < 12; i++) {
        string s;
        cin >> s;
        if (find(s.begin(), s.end(), 'r') != s.end()) {
            res++;
        }
    }

    cout << res << endl;
}
```
