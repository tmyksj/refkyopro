# AtCoder Beginner Contest 060
## B - Choose Integers
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    vector<bool> mod(b, false);
    for (int i = 1; !mod[i * a % b]; i++) {
        mod[i * a % b] = true;
    }

    cout << (mod[c] ? "YES" : "NO") << endl;
}
```
