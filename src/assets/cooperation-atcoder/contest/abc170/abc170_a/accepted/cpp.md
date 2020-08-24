# AtCoder Beginner Contest 170
## A - Five Variables
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> x(5);
    for (int i = 0; i < 5; i++) {
        cin >> x[i];
    }

    cout << find(x.begin(), x.end(), 0) - x.begin() + 1 << endl;
}
```
