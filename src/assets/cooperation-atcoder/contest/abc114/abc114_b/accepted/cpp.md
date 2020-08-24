# AtCoder Beginner Contest 114
## B - 754
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int r_min = 1000;
    for (int i = 0; i + 2 < static_cast<int>(s.size()); i++) {
        int r = 100 * (s[i] - '0') + 10 * (s[i + 1] - '0') + (s[i + 2] - '0');
        if (r_min > abs(r - 753)) {
            r_min = abs(r - 753);
        }
    }

    cout << r_min << endl;
}
```
