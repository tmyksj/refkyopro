# AtCoder Beginner Contest 174
## D - Alter Altar
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string c;
    cin >> n >> c;
    cout << count(c.begin(), c.begin() + count(c.begin(), c.end(), 'R'), 'W') << endl;
}
```
