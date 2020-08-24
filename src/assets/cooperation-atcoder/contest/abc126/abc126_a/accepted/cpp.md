# AtCoder Beginner Contest 126
## A - Changing a Character
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, k;
    string s;
    cin >> n >> k >> s;

    s[k - 1] += ('a' - 'A');

    cout << s << endl;
}
```
