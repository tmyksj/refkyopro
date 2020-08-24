# AtCoder Beginner Contest 052
## B - Increment Decrement
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int x = 0, x_max = 0;
    for (int i = 0; i < n; i++) {
        x += (s[i] == 'I' ? 1 : -1);
        x_max = max(x_max, x);
    }

    cout << x_max << endl;
}
```
