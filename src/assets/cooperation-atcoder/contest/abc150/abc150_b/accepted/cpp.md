# AtCoder Beginner Contest 150
## B - Count ABC
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int res = 0;
    for (int i = 0; i < n - 2; i++) {
        if (s[i] == 'A' && s[i + 1] == 'B' && s[i + 2] == 'C') {
            res++;
        }
    }

    cout << res << endl;
}
```
